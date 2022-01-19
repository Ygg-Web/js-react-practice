import { Component } from "../core/component";
import {pageComponent} from './page.component'


export class sidebarComponent extends Component {
  constructor(id){
    super(id)

    this.links = []
  }

  init(){
    console.log("sidebar")
    const btnToggle = this.el.querySelector('[data-toggle="toggle"]')
    btnToggle.addEventListener('click', btnToggleHandler.bind(this))
  }
}


function btnToggleHandler(e){
  const btn = e.target

  const page = new pageComponent('page')
  const contant = page.el.querySelector('.content')
  console.log(contant)


    if(btn.classList.contains('fa-bars')){
      btn.classList.remove('fa-bars')
      btn.classList.add('fa-times')
      this.el.classList.add('active')
      contant.classList.remove('active')
  } else {
    btn.classList.remove('fa-times')
    btn.classList.add('fa-bars')
    this.el.classList.remove('active')
    contant.classList.add('active')
  }
}