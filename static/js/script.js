console.log("Salut je suis script.js");

let storedLang = localStorage.getItem('lang') || 'fr';

i18next.init({
    lng: storedLang,
    resources: {
        en: {
            translation: {
                "site-lang": "en",
                "site-title": "ThreadsFlow",
                "pricing": "Pricing",
                "about": "About",
                "logout": "Logout",
                "login": "Login",
                "footer-text": "\"Lorem ipsum dolor sit <br class=\"hidden md:block\"> amet consectetur.\"",
                "sales-policy": "Sales Policy",
                "privacy-policy": "Privacy Policy",
                "cta-link": "Go there now",
                "indie-hacker": "indie hacker",
                "about-paragraph-1": "I am an <strong>indie hacker</strong>, and this SaaS was designed to optimize my Threads networks. The idea is to create a powerful and accessible tool that allows anyone to improve their online presence and automate their interactions on Threads. This project was born from a passion for development and a personal need to maximize efficiency on social media.",
                "about-paragraph-2": "This project was created to simplify and automate repetitive tasks on Threads, while allowing for maximum results. Thanks to this tool, you can easily manage your interactions, track your performance, and grow your presence without spending too much time.",
                "cta-demo": "Free demo access",
                "cta-pricing": "View our pricing",
                "cta-access": "Access your space",
                "trusted-header": "They trusted us!",
                "trusted-users-pre": "Already",
                "trusted-users-post": "users!",
                "hero-description": "ThreadsFlow, your analysis, tracking, and management tool for your Threads profile, designed to optimize your content strategy and maximize your engagement on the platform."
            }
        },
        fr: {
            translation: {
                "site-lang": "fr",
                "site-title": "ThreadsFlow",
                "pricing": "Nos prix",
                "about": "À propos",
                "logout": "Déconnexion",
                "login": "Connexion",
                "footer-text": "\"Lorem ipsum dolor sit <br class=\"hidden md:block\"> amet consectetur.\"",
                "sales-policy": "Politique de vente",
                "privacy-policy": "Politique de confidentialité",
                "cta-link": "J'y vais de suite",
                "indie-hacker": "indie hacker",
                "about-paragraph-1": "Je suis un <strong>indie hacker</strong>, et ce SaaS a été conçu pour optimiser mes réseaux Threads. L'idée est de créer un outil puissant et accessible qui permet à chacun d'améliorer sa présence en ligne et d'automatiser ses interactions sur Threads. Ce projet est né d'une passion pour le développement et d'un besoin personnel de maximiser l'efficacité sur les réseaux sociaux.",
                "about-paragraph-2": "Ce projet a été créé dans le but de simplifier et d'automatiser les tâches répétitives sur Threads, tout en permettant de maximiser les résultats. Grâce à cet outil, vous pouvez facilement gérer vos interactions, suivre vos performances et développer votre présence sans y consacrer trop de temps.",
                "cta-demo": "Accès gratuit à la démo",
                "cta-pricing": "Voir nos prix",
                "cta-access": "Accédez à votre espace",
                "trusted-header": "Ils nous ont fait confiance !",
                "trusted-users-pre": "Déjà",
                "trusted-users-post": "utilisateurs !",
                "hero-description": "ThreadsFlow, votre outil d'analyse, de suivi et de gestion de votre profil Threads, conçu pour optimiser votre stratégie de contenu et maximiser votre engagement sur la plateforme."
            }
        },
        es: {
            translation: {
                "site-lang": "es",
                "site-title": "ThreadsFlow",
                "pricing": "Precios",
                "about": "Acerca de",
                "logout": "Cerrar sesión",
                "login": "Iniciar sesión",
                "footer-text": "\"Lorem ipsum dolor sit <br class=\"hidden md:block\"> amet consectetur.\"",
                "sales-policy": "Política de ventas",
                "privacy-policy": "Política de privacidad",
                "cta-link": "Ve allí ahora",
                "indie-hacker": "indie hacker",
                "about-paragraph-1": "Soy un <strong>indie hacker</strong>, y este SaaS fue diseñado para optimizar mis redes de Threads. La idea es crear una herramienta poderosa y accesible que permita a cualquiera mejorar su presencia en línea y automatizar sus interacciones en Threads. Este proyecto nació de una pasión por el desarrollo y una necesidad personal de maximizar la eficiencia en las redes sociales.",
                "about-paragraph-2": "Este proyecto fue creado para simplificar y automatizar las tareas repetitivas en Threads, mientras permite obtener resultados máximos. Gracias a esta herramienta, puedes gestionar fácilmente tus interacciones, hacer un seguimiento de tu rendimiento y desarrollar tu presencia sin dedicar demasiado tiempo.",
                "cta-demo": "Acceso gratuito a la demo",
                "cta-pricing": "Ver nuestros precios",
                "cta-access": "Accede a tu espacio",
                "trusted-header": "¡Ellos confiaron en nosotros!",
                "trusted-users-pre": "¡Ya",
                "trusted-users-post": "usuarios!",
                "hero-description": "ThreadsFlow, tu herramienta de análisis, seguimiento y gestión de tu perfil en Threads, diseñada para optimizar tu estrategia de contenido y maximizar tu compromiso en la plataforma."
            }
        }
    }
}, (err, t) => {
    if (err) return console.error("Erreur de traduction :", err);
    updateTranslations();
});

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });
}

const langSelect = document.querySelector('#language-selector');
langSelect.value = storedLang;

langSelect.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem('lang', selectedLang);
    i18next.changeLanguage(selectedLang, (err, t) => {
        if (err) return console.error("Erreur lors du changement de langue :", err);
        updateTranslations();
    });
});
