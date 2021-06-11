class Carousel {
    constructor(options) {
        let defaultOptions = {
            listImage: [],
            listSkill: [],
            listText: [],
            selector: '.carousel',
            autoplay: 8000
        }
        this.options =  Object.assign(defaultOptions, options);
        this.autoplay = options.autoplay;
        this.listImage = options.listImage;
        this.listSkill = options.listSkill;
        this.listText = options.listText;
        this.current = null;
        this.currentSkill = null;
        this.selector = options.selector;
        this.element = document.querySelector(options.selector);
    }
    init() {
        let previous = document.createElement('button');
        previous.setAttribute('class', 'previous-button');
        previous.innerHTML = '<';
        this.element.appendChild(previous);
        let ul = document.createElement('ul');
        let divDot = document.createElement('div');
        divDot.className = 'dot-container flex center'
        for(let i = 0; i < this.listImage.length; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let div = document.createElement('div');
            let intro = document.createElement('p');
            intro.className = 'carousel-text';
            let p = document.createElement('p');
            let text = document.createElement('p');
            let dot = document.createElement('span');
            dot.className = 'dot'
            p.className = `uppercase carousel-title`;

            img.className = 'slide';
            text.className = 'text';
            img.setAttribute('src', this.listImage[i]);
            dot.textContent = '.';

            li.appendChild(div);
            div.appendChild(intro);
            div.appendChild(p);
            li.appendChild(text);
            li.appendChild(img);
            divDot.appendChild(dot);
            ul.appendChild(li);  
        }
        this.element.appendChild(ul);
        this.element.appendChild(divDot);
        
        
        let next = document.createElement('button');
        next.setAttribute('class', 'next-button');
        next.innerHTML = '>';
        this.element.appendChild(next);

        this.prepareEvent();
        if(this.autoPlay !=0) {
            this.autoPlay();
        }
    }
    play() {
        this.current = this.listImage[0];
        let intro = document.querySelector(this.selector + ' p.carousel-text');
        intro.textContent = 'Je suis...'
        let p = document.querySelector(this.selector + ' p.uppercase');
        p.classList.add('carousel-title--0')
        this.currentSkill = this.listSkill[0];
        console.log(this.listSkill)
        p.innerHTML = this.currentSkill;
        let text = document.querySelector(this.selector + ' p.text');
        text.innerHTML = this.listText[0];
        text.setAttribute('class', `text text--0`)
        document.querySelector(this.selector + ' li:first-child').setAttribute('class', 'activ');
        document.querySelector(this.selector + ' span.dot:first-child').setAttribute('class', 'activ-dot');
    }

    next() {
        let p = document.querySelector(this.selector + ' p.uppercase');
        let text = document.querySelector(this.selector + ' p.text');
        for (let i = 0; i < this.listImage.length; i++) {
                if (this.listImage[i] == this.current) {
                   p.setAttribute('class', `uppercase carousel-title carousel-title--0`)
                    let activ = document.querySelector(this.selector + ' li.activ');
                    let activDot = document.querySelector(this.selector + ' span.activ-dot');
                    if (i == (this.listImage.length - 1)) {
                        this.current = this.listImage[0];
                        this.currentSkill = this.listSkill[0];
                        p.innerHTML = this.currentSkill
                        p.setAttribute('class', `uppercase carousel-title carousel-title--0`)
                        text.innerHTML = this.listText[0]
                        text.setAttribute('class', `text text--0`)
                        this.element.querySelector('li:first-child').setAttribute('class', 'activ');
                        this.element.querySelector('span.dot:first-child').setAttribute('class', 'activ-dot');
                    } else {
                        this.current = this.listImage[++i]; //pré-incrémentation
                        this.currentSkill = this.listSkill[i];
                        p.innerHTML = this.currentSkill;
                        p.setAttribute('class', `uppercase carousel-title carousel-title--${i}`)
                        text.innerHTML = this.listText[i]
                        text.setAttribute('class', `text text--${i}`)
                        activ.nextSibling.setAttribute('class', `activ`); //on recupère le prochain li avec une class activ
                        activDot.nextSibling.setAttribute('class', `activ-dot`);
                    }                
                    activ.setAttribute('class', ''); // on supprime la class active de l'élément current
                    activDot.setAttribute('class', 'dot')
                    break; // arrêt de la boucle dès qu'on a trouvé l'image
                }
        }
    }

    previous() {
        let p = document.querySelector(this.selector + ' p.uppercase');
        let text = document.querySelector(this.selector + ' p.text');
        for (let i = 0; i <= this.listImage.length; i++) {
            let activ = document.querySelector(this.selector + ' li.activ');
            let activDot = document.querySelector(this.selector + ' span.activ-dot');
            if (this.listImage[i] == this.current) {
                if (i == 0) {
                    this.current = this.listImage[this.listImage.length - 1];
                    this.currentSkill = this.listSkill[this.listSkill.length - 1];
                    p.innerHTML = this.currentSkill
                    p.setAttribute('class', `uppercase carousel-title carousel-title--${this.listSkill.length - 1}`)
                    text.innerHTML = this.listText[this.listText.length - 1]
                    text.setAttribute('class', `text text--${this.listText[this.listText.length - 1]}`)
                    this.element.querySelector('li:last-child').setAttribute('class', 'activ');
                    this.element.querySelector('span.dot:last-child').setAttribute('class', 'activ-dot');
                } else {
                    this.current = this.listImage[--i]; //pré-incrémentation
                    this.currentSkill = this.listSkill[i];
                    p.innerHTML = this.currentSkill;
                    p.setAttribute('class', `uppercase carousel-title carousel-title--${i}`)
                    text.innerHTML = this.listText[i]
                    text.setAttribute('class', `text text--${this.listText[i]}`)
                    activ.previousSibling.setAttribute('class', 'activ'); //on recupère le prochain li avec une class activ
                    activDot.previousSibling.setAttribute('class', 'activ-dot');
                }
                activ.setAttribute('class', ''); // on supprime la class active de l'élément current
                activDot.setAttribute('class', 'dot')
                break; // arrêt de la boucle dès qu'on a trouvé l'image
            }
        }
    }
    prepareEvent() {
        let thisDiapo = this;
        this.element.querySelector('.previous-button').addEventListener('click', () => {
            thisDiapo.previous();
        }); // 'this.element' pour récupérer le bouton de mon Diaporama courant 
        this.element.querySelector('.next-button').addEventListener('click', () => {
            thisDiapo.next();
        });
    }
    autoPlay() {
        let thisDiapo = this;
        setInterval(() => {
            thisDiapo.next();
        }, thisDiapo.autoplay)
    }
}
