export default class MobileMenu {
    constructor() {
        this.burgerBtn = document.querySelector('.button-burger');
        this.mobileMenu = document.querySelector('.mobile-navs');

        if(!!window && this.burgerBtn && !!this.mobileMenu) {
            this.init();
        }
    }

    init() {
        this.events()
    }

    events() {
        const self = this;
        this.burgerBtn.addEventListener('click', (e) => {
            self.mobileMenu.classList.toggle('menu-is-open');
        });
    }
}