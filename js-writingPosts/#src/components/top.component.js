import { Component } from "../core/component";

export class topComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    console.log("top")
    this.el.addEventListener('click', createPostHandler.bind(this))
  }
}



function createPostHandler(e){
//  e.preventDefault()
  if (event.target.dataset.create){
    console.log('click')
  }
}