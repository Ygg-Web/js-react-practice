import axios from "axios"

export default axios.create({
  baseURL: 'https://quiz-react-cdc0c-default-rtdb.europe-west1.firebasedatabase.app/'
})