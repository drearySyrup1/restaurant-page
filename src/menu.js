import Element from './element.js'

export default function (root) {

    let items = [
        {
            img: {
                url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2NTkwNzA4MjE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
                alt: '',
            },
            desc: [
                'Salad',
                '$2.00'
            ],
            info: 'lettuce, garden cress and watercress, endives..'
        },
        {
            img: {
                url: 'https://images.unsplash.com/photo-1568093858174-0f391ea21c45?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2NTkwNzA5MDk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
                alt: '',
            },
            desc: [
                'Salad',
                '$2.00'
            ],
            info: 'lettuce, garden cress and watercress, endives..'
        },
        {
            img: {
                url: 'https://images.unsplash.com/photo-1562059390-a761a084768e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2NTkwNzA5MjA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
                alt: '',
            },
            desc: [
                'Salad',
                '$2.00'
            ],
            info: 'lettuce, garden cress and watercress, endives..'
        },
        {
            img: {
                url: 'https://images.unsplash.com/photo-1601314002592-b8734bca6604?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9vZHx8fHx8fDE2NTkwNzA5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100',
                alt: '',
            },
            desc: [
                'Salad',
                '$2.00'
            ],
            info: 'lettuce, garden cress and watercress, endives..'
        },
    ]

    const menu = new Element(
        'div',
        ['menu'],
        '',
        root,
    )

    items.forEach(item => {
        const itemElement = new Element(
            'div',
            ['item'],
            '',
            menu.el
        )
        const img = new Element(
            'img',
            [],
            '',
            itemElement.el,
            [
                {
                    name: 'src',
                    value: item.img.url
                },
                {
                    name: 'alt',
                    value: item.img.alt,
                }
            ]
        )

        const desc = new Element('div',['desc'],'',itemElement.el)
        item.desc.forEach(descItem => {
            new Element('p', [], descItem, desc.el)
        })

        new Element('p', [], item.info, itemElement.el)
    })
}

