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
            console.log(method)
            this.root.on(listener, () => {})

        })
    }

    remoceDOMListeners() {

    }
}


function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}