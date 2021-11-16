export class Excel {
    constructor(selector, options) {
        this.elem = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const root = document.createElement('div')

        this.components.forEach(Component => {
            const component = new Component()
            root.insertAdjacentHTML('beforeend', component.toHTML())
        });

        return root
    }

    render() {
        this.elem.append(this.getRoot())
    }
}