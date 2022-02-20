import { Component } from "../core/component"
import {pageComponent} from './page.component'

export class startAppComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    // const page = new pageComponent('page')
    // page.hide()

    const page = document.querySelector('#page')

    if(localStorage.getItem('startApp')){
      this.hide()
      page.classList.remove('hide')
    }
    
    const btnStart = this.el.querySelector('[data-start="start"]')
    btnStart.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler(){
  localStorage.setItem('startApp', true)
  page.classList.remove('hide')

  this.hide()
}