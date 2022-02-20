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
    this.onShow()
  }

  hide(){
    this.el.classList.add('hide')
    this.onHide()
  }
}