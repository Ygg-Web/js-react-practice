class Dom {

}

export function $() {
    return new Dom()
}

$.create = (tagName, classes = '') => {
    const elem = document.createElement(tagName)
    if (classes) {
        elem.classList.add(classes)
    }
    return elem
}