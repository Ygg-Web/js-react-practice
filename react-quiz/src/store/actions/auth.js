import axios from '../../axios/axios-quiz'
import { AUTH_SECCESS, AUTH_LOGOUT } from './actionTypes'

export function auth(email, password, isLogin){
  return async dispatch => {
      const authData = {
        email,
        password,
        returnSecureToken: true,
      }

      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBV3Bs4P4QLzJFeCwCgx4U7SazW0MNKi2U'

      if(isLogin){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBV3Bs4P4QLzJFeCwCgx4U7SazW0MNKi2U'
      }
      const response = await axios.post(url, authData)
      const data = response.data

      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

      localStorage.setItem('token', data.idToken)
      localStorage.setItem('userId', data.localId)
      localStorage.setItem('expirationDate', expirationDate)

      dispatch(authSuccess(data.idToken))
      dispatch(autoLogout(data.expiresIn))
  }
}

export function autoLogout(time){
  return dispatch => {
    setTimeout (()=> {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {

  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')

  return {
    type: AUTH_LOGOUT
  }
}

export function authSuccess (token) {
  return {
    type: AUTH_SECCESS
  }
}