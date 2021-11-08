export class Component {
    constructor(id) {
        this.elem = document.getElementById(id)
        this.init()
    }

    init() {}

    onShow() {

    }

    onHide() {

    }

    hide() {
        this.elem.classList.add('hide')
        this.onHide()
    }

    show() {
        this.elem.classList.remove('hide')
        this.onShow()

    }
}