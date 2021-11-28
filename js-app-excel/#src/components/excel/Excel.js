import { $ } from "../../core/dom"
import { Emitter } from "../../core/Emitter"

export class Excel {
    constructor(selector, options) {
        this.elem = $(selector)
        this.components = options.components || []
        this.emitter = new Emitter()
    }

    getRoot() {
        const root = $.create('div', 'excel')

        const componentOptions = {
            emitter: this.emitter
        }

        this.components = this.components.map(Component => {
            const elem = $.create('div', Component.className)
            const component = new Component(elem, componentOptions)
            elem.html(component.toHTML())
            root.append(elem)
            return component
        });

        return root
    }

    render() {
        this.elem.append(this.getRoot())
        this.components.forEach(component => component.init());
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}