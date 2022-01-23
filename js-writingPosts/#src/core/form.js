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

      isValid ? clearError(this.form[item]) : setError(this.form[item])

      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}


function setError(item) {
  clearError(item)
  const error =  `<p class="item__validator">Введите корректное значение</p>`
  item.classList.add('invalid')
  item.insertAdjacentHTML('afterend', error)
}

function clearError(item){
  item.classList.remove('invalid')
  if(item.nextSibling){
    item.closest('.form__item').removeChild(item.nextSibling)
  }
}
