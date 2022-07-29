import Element from './element.js'

class mainDiv extends Element {
    constructor(type, classList, value, parent, attributes=[]) {
        super(type, classList, value, parent, attributes);
    }

    clear() {
        this.el.innerHTML = '';
    }
}

export default function (root) {

    return new mainDiv(
        'div',
        ['main'],
        '',
        root,
    )
}
