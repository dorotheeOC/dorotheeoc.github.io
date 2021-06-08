const getIdFromUrl = () => { 
    const urlParams = window.location.search;
    const searchParams = new URLSearchParams(urlParams);
    
    return searchParams.get('id');
}
let projectId = getIdFromUrl();

class Project {
    constructor(id, logo, name, content, keyword, gallery, legend) {
        this.id = id;
        this.logo = logo;
        this.name = name;
        this.content = content;
        this.keyword = keyword;
        this.gallery = gallery;
        this.legend = legend
    }
}
const project1 = new Project(
    1,
    'ohmyfood.png',
    'Oh my food', 
    'Application mobile first de livraison de repas',
    ['HTML5', 'CSS3', 'SASS'],
    ['img/ohmyfood/01.png', 'img/ohmyfood/02.png', 'img/ohmyfood/03.png'],
    'Intégration d\'une maquette, animations CSS: effet de remplissage, chargement progressif des menus, spinner'
);
const project2 = new Project(
    2, 
    'lachouetteagence.png', 
    'La chouette agence',
    'Optimisation d\'un site web existant: accessibilité, performance & référencement naturel',
    ['SEO', 'Accessibilité'],
    ['img/chouette/01.png', 'img/chouette/02.png'],
    'Optimisation des balises d\'indexation sémantiques, audit SEO, recherche de mot-clés, utilisation d\'outils pour améliorer la performance et le design inclusif'
);
const project3 = new Project(
    3,
    'orinoco.png', 
    'Orinoco', 
    'Site e-commerce dédié à l\'ameublement',
    ['HTML5', 'CSS3', 'Javascript', 'Bootstrap', 'Ajax'],
    ['img/orinoco/01.png'],
    'Communication avec base de données, gestion de données temporaires'
);
const project4 = new Project(
    4,
    'sopekockob.png',  
    'So pekocko', 
    'Application d\'évaluation de sauce, développement d\'une API sécurisée',
    ['NodeJS', 'Express', 'MongoDB', 'OWASP'],
    ['img/pekocko/01.png', 'img/pekocko/02.png', 'img/pekocko/03.png'],
    'Construction d\'une API REST sécurisée sur le modèle CRUD'
);
const project5 = new Project(
    5,
    'groupomaniab.png', 
    'Groupomania', 
    'Réseau social interne avec partage de contenu (API, base de données)',
    ['NodeJS', 'Express', 'Sequelize', 'VueJS', 'VueX'],
    ['img/groupomania/01.png', 'img/groupomania/02.png'],
    'Projet full stack'
);
let projects = []
projects.push(project1, project2, project3, project4, project5);

let a = document.querySelectorAll('a.a-link');
let back = document.getElementById('back-btn');
let logoImg = document.getElementById('logo');
let projectName = document.getElementById('name');
let projectText = document.getElementById('project-text');
let stackText = document.getElementById('stack-text');
let legend = document.getElementById('legend');
let main = document.querySelector('main');
let sectionTitle = document.getElementById('achievement');
let section = document.getElementById('achievement-review');
let sectionMenu = document.getElementById('achievement-all');
let div = document.querySelector('div.single-achievement');
let divImg = document.querySelector('div.achievement-logo');

sectionTitle.style.boxShadow = '0rem .8rem .8rem #edeced';
sectionTitle.style.height = '10rem'

let ul = document.createElement('ul');
ul.className = 'keyword flex';

let i = 1; 
a.forEach(element => element.setAttribute('href', 'achievement.html?id=' + i++));

let listImage;
let listKeywords;
console.log(listKeywords)

for(project of projects) {
    if (projectId == project.id) {
        main.removeChild(sectionMenu);
        console.log(project.id);
        logoImg.setAttribute('src', 'img/' + project.logo);
        projectName.textContent = project.name;
        projectText.textContent = project.content;
        listKeywords = project.keyword;
        listImage = project.gallery;
        legend.innerHTML = project.legend;
    } else if(!projectId) {
        div.removeChild(divImg);
        main.removeChild(section)
    }
}
for(keyword of listKeywords) {
    let li = document.createElement('li');
    li.className = 'badge';
    li.textContent = keyword;
    ul.appendChild(li);
}
stackText.appendChild(ul);

back.addEventListener('click', () => {
    document.location.href = 'achievement.html';
})

class Application {
    constructor() {
        this.diapo = null;
    }
    init() {
        this.diapoHeader = new Carousel({
            listImage: listImage,
            autoplay: 5000000000,
            selector: ".carousel-desc-responsive"
        });
        this.diapoHeader.init();
        this.diapoHeader.play();
    }
}

let app = new Application();
app.init();