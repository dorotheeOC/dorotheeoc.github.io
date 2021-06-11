class Carousel {
    constructor(options) {
        let defaultOptions = {
            listImage: [],
            legendText: '',
            selector: '.achievement-carousel',
            autoplay: 5000
        }
        this.options =  Object.assign(defaultOptions, options);
        this.autoplay = options.autoplay;
        this.listImage = options.listImage;
        this.legendText = options.legendText;
        this.current = null;
        this.selector = options.selector;
        this.element = document.querySelector(options.selector);
    }
    init() {
        let previous = document.createElement('button');
        previous.setAttribute('class', 'previous-button');
        previous.innerHTML = '<';
        this.element.appendChild(previous);
        let legend = document.querySelector(this.selector +' p');
        console.log(legend)
        legend.innerHTML = this.legendText;
        console.log(this.legendText)
        let ul = document.createElement('ul');
        for(let image of this.listImage) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.setAttribute('src', image);
            li.appendChild(img);
            ul.appendChild(li);
        }
        this.element.appendChild(ul);
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
        document.querySelector(this.selector + ' li:first-child').setAttribute('class', 'activ');
    }

    next() {
        for (let i = 0; i < this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                let activ = document.querySelector(this.selector + ' li.activ');
                if (i == (this.listImage.length - 1)) {
                    this.current = this.listImage[0];
                    this.element.querySelector('li:first-child').setAttribute('class', 'activ');
                } else {
                    this.current = this.listImage[++i]; //pré-incrémentation
                    activ.nextSibling.setAttribute('class', 'activ'); //on recupère le prochain li avec une class activ
                }                
                activ.setAttribute('class', ''); // on supprime la class active de l'élément current
                break; // arrêt de la boucle dès qu'on a trouvé l'image
            }
        }
    }

    previous() {
        for (let i = 0; i <= this.listImage.length; i++) {
            let activ = document.querySelector(this.selector + ' li.activ');
            if (this.listImage[i] == this.current) {
                if (i == 0) {
                    this.current = this.listImage[this.listImage.length - 1];
                    this.element.querySelector('li:last-child').setAttribute('class', 'activ');
                } else {
                    this.current = this.listImage[--i]; //pré-incrémentation
                    activ.previousSibling.setAttribute('class', 'activ'); //on recupère le prochain li avec une class activ
                }
                activ.setAttribute('class', ''); // on supprime la class active de l'élément current
                break; // arrêt de la boucle dès qu'on a trouvé l'image
            }
        }
    }
    prepareEvent() {
        let thisDiapo = this;
        if(this.listImage.length > 1) {
            this.element.querySelector('.previous-button').addEventListener('click', () => {
                thisDiapo.previous();
            }); // 'this.element' pour récupérer le bouton de mon Diaporama courant 
            this.element.querySelector('.next-button').addEventListener('click', () => {
                thisDiapo.next();
            });
        }
    }
    autoPlay() {
        let thisDiapo = this;
        setInterval(() => {
            thisDiapo.next();
        }, thisDiapo.autoplay)
    }
}
