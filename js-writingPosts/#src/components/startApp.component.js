import { Component } from "../core/component"
import {pageComponent} from './page.component'

export class startAppComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    const page = new pageComponent('page')
    page.hide()

    if(localStorage.getItem('startApp')){
      this.hide()
      page.show()
    }
    
    const btnStart = this.el.querySelector('[data-start="start"]')
    btnStart.addEventListener('click', buttonHandler.bind(this, page))
  }
}

function buttonHandler(page){
  localStorage.setItem('startApp', true)
  page.show()
  this.hide()
}