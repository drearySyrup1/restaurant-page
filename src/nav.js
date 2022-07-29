import Element from './element.js'

export default function (root) {
    const navDiv = new Element(
        'div',
        ['nav'],
        '',
        root,
    )

    const links = ['Home','Menu','Contact'];

    const ul = new Element('ul', [], '', navDiv.el)

    links.forEach(link => {
    const li = new Element('li', [], '', ul.el)

        new Element(
            'a',
            [],
            link,
            li.el
        ).el.dataset.name = link.toLowerCase();
    })
}

