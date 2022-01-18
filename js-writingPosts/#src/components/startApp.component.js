import { Component } from "../core/component";

export class startAppComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    const btnStart = document.querySelector('[data-start="start"]')
    btnStart.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler(){
  this.hide()
}