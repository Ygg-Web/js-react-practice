import { $ } from "../../core/dom"

export class Excel {
    constructor(selector, options) {
        this.elem = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const root = $.create('div', 'excel')

        this.components.forEach(Component => {
            const elem = $.create('div', Component.className)
            const component = new Component(elem)
            elem.innerHTML = component.toHTML()
            root.append(elem)
        });

        return root
    }

    render() {
        this.elem.append(this.getRoot())
    }
}