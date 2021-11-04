import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.elem.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.elem, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLenght(10)]
        })
    }
}


function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.elem.type.value,
            ...this.form.value()
        }

        this.form.clear()

        console.log('Submin', formData)
    }
}