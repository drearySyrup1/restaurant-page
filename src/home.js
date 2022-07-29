import Element from './element.js'

export default function (root) {
    let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente libero minus maxime corporis exercitationem aut quasi quaerat velit, vero doloribus, ipsa repellat recusandae perferendis voluptatem fugiat nihil fugit officiis?';

    new Element(
        'p',
        [],
        content,
        root,
    )
}

