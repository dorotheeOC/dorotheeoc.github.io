const Achievements = [
    {
        id: 1,
        name: 'ohmyfood',
        title: 'Oh my food',
        img_src: 'ohmyfood.png',
        description: 'Intégration mobile first du site d\'une plateforme de livraison de plats',
        stacks: ['scss', 'animation', 'responsive'],
        more_info: `<h3 class="title">OpenClassrooms - Intégration d'une maquette</h3><span class="text-light">Oh my food! est un projet réalisé dans le cadre de ma formation</span><h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Intégrer les pages à partir d'une maquette mobile</li><li>Imaginer la version desktop</li><li>Implémenter quelques animations dont un loader et des effets de d'apparition</li></ul>`,
        type: 'personnal'
    },
    {
        id: 2,
        name: 'chouette',
        title: 'La chouette agence',
        img_src: 'lachouetteagence.png',
        description: 'Audit SEO: optimisation et référencement d\'une agence web',
        stacks: ['SEO', 'Accessibilité', 'Performance'],
        more_info: `<h3 class="title">OpenClassrooms - Optimiser le référencement d'une agence fictive</h3><span class="text-light">La chouette agence est un projet réalisé dans le cadre de ma formation</span><h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Faire l'audit SEO du site en production</li><li>Optimisation de chargement de la page</li><li>Améliorer les metas des différentes pages</li><li>Recherche des termes stratégiques: plan de tags</li><li>Proposer des modifications sémantiques pour améliorer le niveau d'accessibilité</li></ul>`,
        type: 'personnal'
    },
    {
        id: 3,
        name: 'orinoco',
        title: 'Orinoco',
        img_src: 'orinoco.png',
        description: 'MVP: site e-commerce d\'ameublement avec un framework CSS',
        stacks: ['Javascript', 'Bootstrap', 'Ajax'],
        more_info: `<h3 class="title">OpenClassrooms - Développer un e-commerce</h3><span class="text-light">Orinoco est un projet réalisé dans le cadre de ma formation</span><h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Créer un MVP d'une boutique de meuble en ligne</li><li>Connexion du front avec une API</li><li>Créer un catalogue de produits et pouvoir accéder à leur fiche respective</li><li>Créer un panier fictif</li><li>Effectuer une simulation de commande en ligne avec message de confirmation</li><li>Utilisation d'un framework</li></ul>`,
        type: 'personnal'
    },
    {
        id: 4,
        name: 'sopekocko',
        title: 'So Pekocko',
        img_src: 'sopekockob.png',
        description: 'Branchement d\'une API REST avec une application de classement de sauces épicées',
        stacks: ['NodeJS', 'MongoDB', 'API REST', 'CRUD', 'Sécurité'],
        more_info: `<h3 class="title">OpenClassrooms - Développer une API</h3><span class="text-light">So Pekocko est un projet réalisé dans le cadre de ma formation</span> <h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Développer une API REST avec Node JS</li><li>Connexion d'un serveur à une base de données (MongoDB)</li><li>Création de routes pour l'application client selon la méthode C.R.U.D (Create, Read, Update, Delete)</li><li>Gestion de des paquets embarqués pour sécuriser l'API</li></ul>`,
        type: 'personnal'
    },
    {
        id: 5,
        name: 'groupomania',
        title: 'Groupomania',
        img_src: 'groupomaniab.png',
        description: 'Réseau social d\'entreprise full stack',
        stacks: ['Vue JS', 'NodeJS', 'API', 'mySQL', 'tinyMCE'],
        more_info: `<h3 class="title">OpenClassrooms - Développer un réseau social d'entreprise</h3><span class="text-light">Groupomania est un projet réalisé dans le cadre de ma formation</span> <h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Développer une API REST avec Node JS</li><li>Connexion d'un serveur à une base de données (MongoDB)</li><li>Création de routes pour l'application client selon la méthode C.R.U.D (Create, Read, Update, Delete)</li><li>Gestion de des paquets embarqués pour sécuriser l'API</li><li>Utilisation d'un framework JS</li><li>Utilisation d'un éditeur de texte enrichi (WYSIWYG)</li></ul>`,
        type: 'personnal'
    },
    {
        id: 6,
        name: 'cvtp',
        title: 'Cv Trop Pur',
        img_src: 'cvtp.png',
        description: 'POC: Outil de création d\'un CV en ligne (avec impression PDF)',
        stacks: ['React JS', 'NodeJS', 'print HTML / CSS'],
        more_info: `<h3 class="title">Projet Personnel - Développement d'un générateur de CV en ligne</h3><span class="text-light">CV trop pur est un projet personnel réalisé pour apprendre REACT JS</span> <h4 class="uppercase">Mes missions :</h4><ul class="list-unstyled text-light"><li>Créer une maquette MVP</li><li>Créer une API REST qui lance la page de connexion</li><li>Lancement du projet: routes nécessaire, nombre de page, précision de la données requise, librairies...</li><li>Enregistrer les données indispensables et modifiables d'un CV: Identité, Expériences, formation, Compétences, centre d'intérets</li><li>Choisir un template (2 exemples fournis pour la démo)</li><li>Imprimer en PDF</li></ul>`,
        type: 'personnal'
    },
    {
        id: 7,
        name: 'montpellier',
        title: 'Montpellier tourisme',
        img_src: 'montpellier.png',
        description: 'Création du thème Wordpress pour le site de Montpellier tourisme',
        stacks: ['Wordpress', 'ACF', 'PHP', 'Vanilla JS', 'SCSS'],
        more_info: `<h3 class="title">Projet Professionnel - Site touristique de la destination Montpellier</h3><span class="text-light">Montpellier est une des destinations sur laquelle j'ai travaillé en tant qu'<em>intégratrice Web</em> / <em>Développeuse Wordpress</em> chez <em>Raccourci Agency</em>.</span> <span class="text-light">Le site touristique répond aux nombreux besoins du DMO (Destination management organisation) pour diffuser les informations concernant leur territoire et mettre en avant les différents professionels / endroits incontournables à l'attention des (nouveaux) voyageurs amenés à séjourner dans leurs hébergements variés.</span> <h4 class="uppercase">Mes missions globales :</h4><ul class="list-unstyled text-light"><li>Intégrer une maquette XD / figma</li><li>Développement du header / footer</li><li>Styliser les blocs du catalogue Woody selon une feuille de style</li><li>Ajouter une touche d'animation pour les différentes micro intéractions du site</li><li>Personnaliser les pages avec les éléments graphique de la destination</li><li>Synchroniser une carte interactive svg avec des liens vers des lieux incontournables de la destination</li><li>Gestion des traductions</li><li>Brancher tous les addons Woody nécessaires</li></ul><h4 class="uppercase">Mes missions spécifiques à la destination :</h4><ul class="list-unstyled text-light"><li>Mettre à disposition des classes de sections pour alterner certaines mises en avant</li><li>Développer un bloc agenda au catalogue pour brancher une page édito avec des fiches évènements (SIT)</li><li>Régie pub dans les différentes entrées sur menu principal</li></ul>`,
        type: 'pro'
    },
    {
        id: 8,
        name: 'terresdelimousin',
        title: 'Terres de Limousin',
        img_src: 'terresdelimousin.png',
        description: 'Création du thème Wordpress pour le site de Terres de Limousin',
        stacks: ['Wordpress', 'ACF', 'PHP', 'Vanilla JS', 'SCSS'],
        more_info: `<h3 class="title">Projet Professionnel - Site touristique de la destination Terres de Limousin</h3><span class="text-light">Terres de Limousin est une des destinations sur laquelle j'ai travaillé en tant qu'<em>intégratrice Web</em> / <em>Développeuse Wordpress</em> chez <em>Raccourci Agency</em>.</span> <span class="text-light">Le site touristique répond aux nombreux besoins du DMO (Destination management organisation) pour diffuser les informations concernant leur territoire et mettre en avant les différents professionels / endroits incontournables à l'attention des (nouveaux) voyageurs amenés à séjourner dans leurs hébergements variés.</span> <h4 class="uppercase">Mes missions globales :</h4><ul class="list-unstyled text-light"><li>Intégrer une maquette XD / figma</li><li>Développement du header / footer</li><li>Styliser les blocs du catalogue Woody selon une feuille de style</li><li>Ajouter une touche d'animation pour les différentes micro intéractions du site</li><li>Personnaliser les pages avec les éléments graphique de la destination</li><li>Synchroniser une carte interactive svg avec des liens vers des lieux incontournables de la destination</li><li>Gestion des traductions</li><li>Brancher tous les addons Woody nécessaires</li></ul><h4 class="uppercase">Mes missions spécifiques à la destination :</h4><ul class="list-unstyled text-light"><li>Segmentation des différents territoires de la destination en affichant un footer et un logo spécifique personnalisé</li></ul>`,
        type: 'pro'
    },
    {
        id: 9,
        name: 'granville',
        title: 'Granville, terre & mer',
        img_src: 'granville.png',
        description: 'Création du thème Wordpress pour le site de Granville, terre & mer',
        stacks: ['Wordpress', 'ACF', 'PHP', 'Vanilla JS', 'SCSS'],
        more_info: `<h3 class="title">Projet Professionnel - Site touristique de la destination Granville Terre & Mer</h3><span class="text-light">Granville Terre & Mer est une des destinations sur laquelle j'ai travaillé en tant qu'<em>intégratrice Web</em> / <em>Développeuse Wordpress</em> chez <em>Raccourci Agency</em>.</span> <span class="text-light">Le site touristique répond aux nombreux besoins du DMO (Destination management organisation) pour diffuser les informations concernant leur territoire et mettre en avant les différents professionels / endroits incontournables à l'attention des (nouveaux) voyageurs amenés à séjourner dans leurs hébergements variés.</span> <h4 class="uppercase">Mes missions globales :</h4><ul class="list-unstyled text-light"><li>Intégrer une maquette XD / figma</li><li>Développement du header / footer</li><li>Styliser les blocs du catalogue Woody selon une feuille de style</li><li>Ajouter une touche d'animation pour les différentes micro intéractions du site</li><li>Personnaliser les pages avec les éléments graphique de la destination</li><li>Synchroniser une carte interactive svg avec des liens vers des lieux incontournables de la destination</li><li>Brancher tous les addons Woody nécessaires</li><li>Gestion des traductions</li></ul><h4 class="uppercase">Mes missions spécifiques à la destination :</h4><ul class="list-unstyled text-light"><li>Création de bloc personnalisé respectivement différents en mobile / desktop</li><li>Branchement d'addons externes: messenger (meta) - panier de réservation</li></ul>`,
        type: 'pro'
    },
    {
        id: 10,
        name: 'morbihan',
        title: 'Morbihan tourisme',
        img_src: 'morbihan.png',
        description: 'Création du thème Wordpress pour le site de Morbihan tourisme',
        stacks: ['Wordpress', 'ACF', 'PHP', 'Vanilla JS', 'SCSS'],
        more_info: `<h3 class=title>Projet Professionnel - Site touristique de la destination Morbihan</h3><span class="text-light">Morbihan est une des destinations sur laquelle j'ai travaillé en tant qu'<em>intégratrice Web</em> / <em>Développeuse Wordpress</em> chez <em>Raccourci Agency</em>.</span> <span class="text-light">Le site touristique répond aux nombreux besoins du DMO (Destination management organisation) pour diffuser les informations concernant leur territoire et mettre en avant les différents professionels / endroits incontournables à l'attention des (nouveaux) voyageurs amenés à séjourner dans leurs hébergements variés.</span> <h4 class="uppercase">Mes missions globales :</h4><ul class="list-unstyled text-light"><li>Intégrer une maquette XD / figma</li><li>Développement du header / footer</li><li>Styliser les blocs du catalogue Woody selon une feuille de style</li><li>Ajouter une touche d'animation pour les différentes micro intéractions du site</li><li>Personnaliser les pages avec les éléments graphique de la destination</li><li>Synchroniser une carte interactive svg avec des liens vers des lieux incontournables de la destination</li><li>Brancher tous les addons Woody nécessaires</li><li>Gestion des traductions</li></ul><h4 class="uppercase">Mes missions spécifiques à la destination :</h4><ul class="list-unstyled text-light"><li>Gestion de sous-arborescence avec un changement de palette de couleur selon l'espace visité</li><li>Filtrer le rendu des fiches touristiques ayant un label spécifique</li></ul>`,
        type: 'pro'
    },
]

export default Achievements;