import { capitalize } from "./utils"

export class DomListener {
    constructor(root, listeners = []) {
        if (!root) {
            throw new Error(`No root provided for DomListener!`)
        }
        this.root = root
        this.listeners = listeners
    }

    initDOMListeners() {
        // console.log(this.listeners)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(`Method ${method} is not implement in ${name} Component`)
            }
            // console.log(this[])
            this.root.on(listener, this[method].bind(this))

        })
    }

    remoceDOMListeners() {

    }
}


function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}