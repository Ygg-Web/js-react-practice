import { $ } from "../../core/dom"

export class Excel {
    constructor(selector, options) {
        this.elem = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const root = $.create('div', 'excel')

        this.components.forEach(Component => {
            const elem = $.create('div', Component.className)
            const component = new Component(elem)
            elem.html(component.toHTML())
            root.append(elem)
        });

        return root
    }

    render() {
        this.elem.append(this.getRoot())
    }
}