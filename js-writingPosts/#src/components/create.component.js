import { Component } from "../core/component";

export class createComponent extends Component {
  constructor(id){
    super(id)
  }

  init(){
    console.log("create")
  }
}