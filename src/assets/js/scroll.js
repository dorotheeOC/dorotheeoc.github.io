export default class Scroll {
    constructor() {
        this.el = document.body;
        this.scrollTopEl = document.querySelector('.side-bar');
        this.scrollPos = 0;

        if(!!window && !!this.el) {
            this.anchors = this.el.querySelectorAll('.anchor');
            this.sections = this.el.querySelectorAll('section');
            
            if(window.location.pathname == '/') {
                this.init();
            }

            if(!!this.scrollTopEl) {
                this.initScrollTool();
            }
        }
    }

    init() {
        this.handleScroll();
    }

    initScrollTool() {
        this.handleScrollTop();
        this.events();
    }

    handleScroll() {
        const self = this;

        for(let anchor of this.anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                let href = anchor.getAttribute('href').split('#').join('');
                for(let section of self.sections) {
                    if(section.getAttribute('id') == href) {
                        let sectionOffsetTop = section.getBoundingClientRect().top;
                        window.scroll({
                            top: sectionOffsetTop,
                            left: 0,
                            behavior: "smooth",
                        });
                    }
                }
            });
        }
    }

    handleScrollTop() {
        const arrow = this.scrollTopEl.querySelector('.item.up');

        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }

    events() {
        const self = this;
        let lastKnownScrollPosition = 0;
        let ticking = false;
        const offsetHeight = document.body.getBoundingClientRect().height / 2;
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > offsetHeight) {
                lastKnownScrollPosition = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function () {
                        self.scrollPos = lastKnownScrollPosition;
                        self.scrollTopEl.classList.add('active');
                        ticking = false;
                    });
                    ticking = true;
                }
            } else {
                self.scrollTopEl.classList.remove('active');
            }
        });
    }
}
