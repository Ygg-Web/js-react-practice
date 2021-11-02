import { Component } from "../core/component";
import { Form } from "../core/form";

export class CreateComponent extends Component {
    constructor(id) {
        super(id)

        this.form = null
    }

    init() {
        this.elem.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.elem, {

        })
    }
}


function submitHandler(event) {
    event.preventDefault()

}