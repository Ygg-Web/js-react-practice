import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";
import { apiService } from "../services/api.service";

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


async function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.elem.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }

        await apiService.createPost(formData)
        this.form.clear()
    }
}