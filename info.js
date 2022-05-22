let info = {
  name: "LECELLIER Clément",
  logo_name: "Clément LECELLIER",
  flat_picture: require("./src/assets/photo.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Allo bonjour Je suis actuellement en deuxième année d'un BTS SIO. Curieux, motivé et passionné de développment, j'aime apprendre, développer et découvrir de nouveaux environnements !",
  links: {
    linkedin: "https://www.linkedin.com/in/cl%C3%A9ment-lecellier-4a87791b9/",
    github: "https://github.com/Ruunex1",
    resume: require("./src/assets/CV.png"),
  },
  education: [
    {
      name: "Lycée Chevrollier",
      place: "Angers",
      date: "2020 - 2022",
      degree: "BTS SIO - SLAM",
      description:
          "En cours d'obtention.",
      skills: [
        "Javascript",
        "Python",
        "Php",
        "Laravel",
        "C#",
        "SQL",
      ]
    },
    {
      name: "Licence Biologie Cellulaire (L2)",
      place: "UBO Brest",
      date: "2017 - 2019",
      degree: "Licence",
      description:
          "Licence de Biologie Parcours Biologie Cellulaire, Moléculaire et Physiologie",
      skills: [
        "Etude des tissus",
        "Biologie",
        "Géologie",
      ]
    },
    {
      name: "Lycée Notre Dame du Kreisker",
      place: "Saint Pol de Léon (29)",
      date: "2014 - 2017",
      degree: "Baccalauréat S option SVT",
      description:
          "Obtention d'un baccalauréat S option SVT. ",
    },

  ],
  experience: [

    {
      name: "Archi-med",
      place: "Angers",
      date: "Février 2022 - Avril 2022",
      position: "Web Developer",
      description:
          "Stage de 7 semaines dans lequel j'ai améliorer une plateforme de relation Client/Consultant pour un CFA. Mise en place d'un calendrier, création d'un espace personnel, envoie d'e-mail, réalisation de tests de personnalités. ",
      skills: [
        "Symfony",
        "Bootstrap",
        "JS",
        "MySQL",
      ]
    },
    {
      name: "Laurans-Peinture",
      place: "Tours",
      date: "Mai 2021 - Juin 2021",
      position: "Web Developer",
      description:
        "Stage de 6 semaines dans lequel j'ai du concevoir un site vitrine en Wordpress pour un artisan peintre de Tours. J'ai réaliser les fonctionnalités suivantes : Affichage des avis Google, Référencement SEO, Cybersecurité, l'esthétique du site, hébergement sur Ionos.",
        skills: [
          "Wordpress",
          "Ionos",
          "MySQL",
        ]
    },

  ],
  skills: [
    {
      title: "Langages",
      info: [
        "Javascript",
        "PHP",
        "Python",
        "C#",
      ],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: ["Vue.js", "Laravel", "Symfony", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "CSS Framworks",
      info: ["Bootstrap", "Tailwind"],
      icon: "fa fa-font"
    },
    {
      title: "Base de données",
      info: ["MongoDB", "MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "Conception de base de données",
      info: ["UML", "JMerise", "Win'Design",],
      icon: "fa fa-database"
    },
    {
      title: "Server",
      info: ["Debian", "Netlify"],
      icon: "fa fa-server"
    },
    {
      title: "Gestion de projet - AGILE",
      info: ["Trello", "Notion"],
      icon: "fa fa-check-square"
    },
    {
      title: "Maquette",
      info: ["AdobeXD"],
      icon: "fa fa-file"
    },
    {
      title: "Versionning",
      info: ["GitHub", "GitLab"],
      icon: "fa fa-code-fork"
    },
  ],
  portfolio: [
    {
      name: "Eurêka",
      pictures: [
        {
          img: require("./src/assets/portfolio/askhim/askhim.png")
        },
        {
          img: require("./src/assets/portfolio/askhim/detail.png")
        },
        {
          img: require("./src/assets/portfolio/askhim/chat.png")
        },

      ],
      technologies: ["Symfony"],
      github: "https://github.com/AskHim-SIO/AskHimWebApp",
      visit: "https://askhim.ctrempe.fr/",
      date: "Fev 2022 - Avril 2022",
      description:
        "Amélioration d'une plateforme en Symfony pour un CFA."
    },

    {
      name: "Laurans Peinture",
      pictures: [
        {
          img: require("./src/assets/portfolio/desbruitsdanslarue/home.jpg")
        },

      ],
      technologies: ["Wordpress"],
      category: "Site Vitrine",
      visit: "https://www.laurans-peinture.fr/",
      date: "Fev, 2022 - Avril, 2022",
      description:
          "Site en Wordpress pour un artisan peintre."
    },

    {
      name: "Formulaire d'entrée dans l'entreprise",
      pictures: [
        {
          img: require("./src/assets/portfolio/meilleurtaux/illustration.jpg")
        },

      ],
      technologies: ["Angular.js", ".Net"],
      description:
          "Automatiser l'arrivée de nouveaux employées dans l'entreprise. Générer une adresse email, une session, les ajouters dans différentes base de données etc."
    },

    {
      name: "Formaflix",
      pictures: [
        {
          img: require("./src/assets/portfolio/formaflix/formaflix.png")
        },

      ],
      technologies: ["C#", ".net"],
      category: "Application de gestion",
      github: "https://github.com/Malcomle/Formaflix_backend",
      date: "Sept, 2021 - Nov, 2021",
      description:
        "Développement d'une application de gestion d'un site web avec WindowsForm. L'application permet de gerer et d'ajouter des formations, de moderer des commentaires par formations. "
    },

  ],
   recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;




