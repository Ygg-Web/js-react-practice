class Dom {
    constructor(selector) {
        this.elem = typeof selector === 'string' ? document.querySelector(selector) : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.elem.innerHTML = html
            return this
        }
        return this.elem.outerHTML.trim()
    }

    text(text) {
        if (typeof text === 'string') {
            this.elem.textContent = text
            return this
        }
        if (this.elem.tagName.toLowerCase === 'input') {
            return this.elem.value.trim()
        }
        return this.elem.textContent.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.elem.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.elem.removeEventListener(eventType, callback)
    }

    find(selector) {
        return $(this.elem.querySelector(selector))
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.elem
        }

        if (Element.prototype.append) {
            this.elem.append(node)
        } else {
            this.elem.appendChild(node)
        }

        return this
    }

    get data() {
        return this.elem.dataset
    }

    closest(selector) {
        return $(this.elem.closest(selector))
    }

    getCoords() {
        return this.elem.getBoundingClientRect()
    }

    findAll(selector) {
        return this.elem.querySelectorAll(selector)
    }

    css(styles = {}) {
        Object.keys(styles).forEach(key => this.elem.style[key] = styles[key])
    }

    id(parse) {
        if (parse) {
            const parsed = this.id().split(':')
            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return this.data.id
    }

    addClass(className) {
        this.elem.classList.add(className)
    }

    removeClass(className) {
        this.elem.classList.remove(className)
    }

    focus() {
        this.elem.focus()
        return this
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const elem = document.createElement(tagName)
    if (classes) {
        elem.classList.add(classes)
    }
    return $(elem)
}