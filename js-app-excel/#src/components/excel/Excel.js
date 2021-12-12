import { $ } from "../../core/dom"
import { Emitter } from "../../core/Emitter"
import { StoreSubscriber } from "../../core/StoreSubscriber"

export class Excel {
    constructor(options) {
        this.components = options.components || []
        this.store = options.store
        this.emitter = new Emitter()
        this.subscriber = new StoreSubscriber(this.store)
    }

    getRoot() {
        const root = $.create('div', 'excel')

        const componentOptions = {
            emitter: this.emitter,
            store: this.store
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

    init() {
        this.subscriber.subscribeComponents(this.components)
        this.components.forEach(component => component.init());
    }

    destroy() {
        this.subscriber.unsubscriberFromStore()
        this.components.forEach(component => component.destroy())
    }
}