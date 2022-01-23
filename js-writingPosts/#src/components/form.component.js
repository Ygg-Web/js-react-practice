import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"
import { apiService } from "../service/api.service"


export class formComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    this.el.addEventListener('submit', submitHandler.bind(this))


    this.form = new Form(this.el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLenght(10)]
  })
  }
}


async function submitHandler(e){
  e.preventDefault()

  if(this.form.isValid()){
    const formData = {
      type: this.el.type.value,
      data: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      ...this.form.value()
      
    }
  
    await apiService.createPosts(formData)
    this.form.clear()
    console.log('FormDATA', formData)
  }

}