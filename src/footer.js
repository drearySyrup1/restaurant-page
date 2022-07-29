import Element from './element.js'

export default function (root) {
    const footer = new Element(
        'div',
        ['footer'],
        '',
        root,
    )

    new Element(
        'span',
        ['mdi','mdi-24px','mdi-github'],
        '',
        footer.el
    )

    let urlLink = 'https://github.com/drearySyrup1'

    new Element(
        'a',
        [],
        'drearySyrup1',
        footer.el,
        [
            {
                name: 'href',
                value: urlLink,
            }
        ]
    )
}

