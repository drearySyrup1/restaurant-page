import header from './header.js'
import nav from './nav.js'
import main from './home.js'
import footer from './footer.js'
import menu from './menu.js'
import contact from './contact.js'
import mainDivCreate from './maindiv.js'

function generate(e) {
    mainDiv.clear();
    switch (e.target.dataset.name) {
        case 'home':
            main(mainDiv.el);
        break;
        case 'menu':
            menu(mainDiv.el);
        break;
        case 'contact':
            contact(mainDiv.el)
        break;
    }
    
}

const wrapper = document.getElementById('content');

header(wrapper);
nav(wrapper);

const links = document.querySelectorAll('.nav > ul > li > a')

links.forEach(link => {
    link.addEventListener('click', generate);
})

const mainDiv = mainDivCreate(wrapper);
main(mainDiv.el);

footer(wrapper);