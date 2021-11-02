import { Component } from "../core/component";
import { Form } from "../core/form";

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.elem.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.elem, {
            title: [],
            fulltext: []
        })
    }
}


function submitHandler(event) {
    event.preventDefault()

    const formData = {
        type: this.elem.type.value,
        ...this.form.value()
    }

    console.log('Submin', formData)
}