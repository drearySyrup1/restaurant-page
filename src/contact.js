import Element from './element.js'

export default function (root) {

    const contact = new Element(
        'div',
        ['contact'],
        '',
        root,
    )

    new Element(
        'input',
        [],
        '',
        contact.el,
        [
            {
                name: 'type',
                value: 'text',
            },
            {
                name: 'placeholder',
                value: 'Name'
            }
        ]
    )

    new Element(
        'input',
        [],
        '',
        contact.el,
        [
            {
                name: 'type',
                value: 'email',
            },
            {
                name: 'placeholder',
                value: 'Email'
            }
        ]
    )
    
    new Element(
        'textarea',
        [],
        '',
        contact.el,
        [
            {
                name: 'cols',
                value: '30',
            },
            {
                name: 'rows',
                value: '5',
            },
            {
                name: 'placeholder',
                value: 'Message'
            }
        ]
    )

    new Element(
        'button',
        [],
        'Submit',
        contact.el,
    )

}

