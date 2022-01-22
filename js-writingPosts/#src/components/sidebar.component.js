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
    this.el.addEventListener('click', linksHandler.bind(this))
  }

  registerLinks(links){
    this.links = links
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

function linksHandler(e){
  e.preventDefault()

  const item = e.target.closest('.nav__item')
    if(!item) return

    if(item.classList.contains('nav__item')){
      Array.from(this.el.querySelectorAll('.nav__item')).forEach(item => {
        item.classList.remove('active')
      })
      item.classList.add('active')

      const activeItem = this.links.find( link => link.name === item.dataset.name)
      this.links.forEach(link => link.component.hide())
      activeItem.component.show()
    }
}