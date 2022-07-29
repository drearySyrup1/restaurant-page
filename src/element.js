export default class Element {
    constructor(type, classList, value, parent, attributes=[]) {
        this.el = document.createElement(type);
        classList.forEach(cl => this.el.classList.add(cl));
        attributes.forEach(attr => {
            this.el.setAttribute(attr.name, attr.value);
        })
        this.el.innerText = value;
        parent.append(this.el)
    }
}