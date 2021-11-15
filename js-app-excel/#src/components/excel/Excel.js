export class Excel {
    constructor(selector, options) {
        this.elem = document.querySelector(selector)
        this.components = options.components || []
    }
}