import Element from './element.js'

export default function (root) {
    const header = new Element(
        'div',
        ['header'],
        '',
        root,
    )

    new Element('h1', [], 'Restaurant.com', header.el)
}

