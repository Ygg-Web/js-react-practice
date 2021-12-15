export class Page {
    constructor(params) {
        this.params = params
    }

    getRoot() {
        throw new Error('Method "getRoot" shoud be implemented')
    }

    afterRender() {}

    destroy() {}
}