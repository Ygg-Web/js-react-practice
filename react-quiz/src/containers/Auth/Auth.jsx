import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component{

  state = {
    formControls: {
      email:{
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный Email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }



  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  onChangeHandler =(event, controlName) => {
    console.log(`${controlName}: `, event.target.value)
  }

  renderInputs () {
    return Object.keys(this.state.formControls).map((controlName, index)=> {
      const control = this.state.formControls[controlName]
      
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render(){
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
              { this.renderInputs()}

              <Button type="success" onClick={this.loginHandler}>Войти</Button>
              <Button type="primary" onClick={this.registerHandler}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth;