import { $ } from "../../core/dom"

export class Excel {
    constructor(selector, options) {
        this.elem = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const root = $.create('div', 'excel')

        this.components = this.components.map(Component => {
            const elem = $.create('div', Component.className)
            const component = new Component(elem)
                //debug
            if (component.name) {
                window['c' + component.name] = component
            }
            elem.html(component.toHTML())
            root.append(elem)
            return component
        });

        return root
    }

    render() {
        this.elem.append(this.getRoot())
        console.log(this.components)

        this.components.forEach(component => component.init());
    }
}