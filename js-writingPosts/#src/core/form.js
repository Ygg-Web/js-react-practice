export class Form {
  constructor(form, items){
    this.form = form
    this.items = items
  }

  clear(){
    Object.keys(this.items).forEach(item => {
      this.form[item].value = ''
    })
  }

  value(){
    const value ={}
    Object.keys(this.items).forEach(item => {
      value[item] = this.form[item].value
    })

    return value
  }
  
  isValid(){
    let isFormValid = true

    Object.keys(this.items).forEach(item => {
      const validators = this.items[item]

      let isValid = true
      validators.forEach(validator => {
        isValid = validator(this.form[item].value) && isValid
      })

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}


function setError(item) {
  
}

function clearError(item){
  item.classList.remove('invalid')

  if(item.nextSibling){
    control.closest('.form__item').removeChild(control.nextSibling)
  }
}
