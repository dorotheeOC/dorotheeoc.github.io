export default class Ux {
    constructor() {
        this.el = document.querySelector('nav.head-navs > ul');
        this.cursor = this.el.querySelector('.cursor-shade');
        this.cursorWidth = this.cursor.getBoundingClientRect().width;

        if(!!window ) {
            this.init();
        }
    }

    init() {
        this.events();
    }

    events() {
        let self = this;
        this.el.addEventListener('mouseover', (e) => {
            self.cursor.style.left = e.clientX - self.cursorWidth * 1.01;
        })
    }
}