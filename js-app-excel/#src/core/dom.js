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

    clear() {
        this.html('')
        return this
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