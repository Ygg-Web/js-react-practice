export class Component {
  constructor(id){
    this.el = document.getElementById(id)
    this.init()
  }

  init(){}

  nShow(){}

  onHide(){}

  show(){
    this.el.classList.remove('hide')
  }

  hide(){
    this.el.classList.add('hide')
  }
}