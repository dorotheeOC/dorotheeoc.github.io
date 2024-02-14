import Achievements from "./achievements";

export default class Api {
    constructor() {
        this.singleEl = document.querySelector('.achievement-single-wrapper');
        this.allPersonals = document.querySelector('.achievements-grid-wrapper.personnal');
        this.allPros = document.querySelector('.achievements-grid-wrapper.pro');
        this.imgEl = document.querySelector('.single-logo');
        this.demoImgEl = document.querySelector('.single-demo');
        this.nameEl = document.querySelector('.single-name');
        this.descEl = document.querySelector('.single-content');
        this.stackParentEl = document.querySelector('.single-content-list');
        this.loaderEl = document.querySelector('.loader');
        this.achievements = Achievements;
        this.urlParams = '';
        this.imgPath =  '/assets/img/';
        this.demoWrapperEl = document.querySelector('.demo-container');
        this.moreBtnEl = document.querySelector('.button-more');
        this.sliderEl = document.querySelector('.achievements-slider');

        if(!!window) {
            this.init();
        }
    }

    init() {
        let params = new URLSearchParams(document.location.search);
        this.urlParams =params.get('name');

        if(!!this.singleEl) {
            this.getOneProject(this.urlParams);
        }

        if(!!this.allPersonals) {
            this.getAllProjects(this.allPersonals, 'personnal');
        }

        if(!!this.allPros) {
            this.getAllProjects(this.allPros, 'pro');
        }

        if(!!this.moreBtnEl && this.demoWrapperEl && !!this.singleEl) {
            this.activeDesc(this.urlParams);
        }

        if(!!this.sliderEl) {
            const sliderWrapper = this.sliderEl.querySelector('.swiper-wrapper');

            if(!!sliderWrapper) {
                this.getAllLatestProjects(sliderWrapper);
            }
        }
    }

    getOneProject(param) {
        for(let achievement of this.achievements) {
            if(achievement.name == param) {
                setTimeout(() => {
                    this.imgEl.src = this.imgPath + 'logos/' + achievement.img_src;
                    this.imgEl.style.opacity = 1;
                    this.demoImgEl.src = this.imgPath + 'projects/wholes-' + achievement.name + '.png';
                    this.demoImgEl.style.opacity = 1;
                }, 600);
                this.nameEl.innerHTML = achievement.title;
                this.descEl.innerHTML = achievement.description;

                for(let stack of achievement.stacks) {
                    let li = document.createElement('li');
                    li.innerHTML = stack;
                    this.stackParentEl.appendChild(li);
                }
            }
        }
    }

    getAllProjects(el, type) {
        for(let [index, achievement] of this.achievements.entries()) {
            if(type === achievement.type) {
                el.innerHTML +=  `<li class="achievements-item all item-${ index++ }">
                    <a class="achievements-item-link" href="/preview.html?name=${ achievement.name }" target="_self">
                        <span class="achievements-item-name text-white text-bold text-center uppercase">${ achievement.title }</span>
                        <img src="/assets/img/logos/${ achievement.img_src }" alt="logo" />
                    </a>
                </li>`
            }
        }
    }

    activeDesc(param) {
        let self = this;
        let projectDesc;

        for(let achievement of Achievements) {
            if(achievement.name == param) {
                projectDesc = achievement.more_info;
            }
        }

        this.moreBtnEl.addEventListener('click', (e) => {
            self.demoWrapperEl.classList.toggle('active');
            self.demoWrapperEl.querySelector('p').innerHTML = projectDesc;
        })
    }

    getAllLatestProjects(el, type) {
        el.innerHTML = '';

        for(let achievement of this.achievements) {
            if(achievement.type == 'pro') {
                el.innerHTML += `<div class="swiper-slide">
                    <div class="slide-content">
                        <div class="achievement-title flex-container flex-dir-column">
                            <span class="pretitle text-light text-white">À propos de...</span>
                            <span class="title text-bold text-primary uppercase">Mes derniers projets</span>
                        </div>
                        <div class="achievements-content flex-container flex-dir-column">
                            <span class="achievements-tag text-light uppercase">${achievement.title}</span>
                            <span class="achievements-desc text-white text-small">${achievement.description}</span>
                            <a class="achievements-preview-link button arrow-next text-tertiary bg-white flex-container flex-dir-column" href="/preview.html?name=${ achievement.name }">
                                <span class="uppercase text-light">Prévisualiser</span>
                                <span class="uppercase text-bold">le projet</span>
                            </a>
                        </div>
                    </div>
                </div>`;
            }
        }

        this.sliderEl.classList.add('loaded');
    }
}