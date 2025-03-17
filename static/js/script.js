console.log("Salut je suis script.js");

let storedLang = localStorage.getItem('lang') || 'fr';

window.addEventListener('load', function () {
    const navItems = document.querySelectorAll('nav a, .div-title-link');
    navItems.forEach(item => {
        item.classList.remove('opacity-0');
        item.classList.add('opacity-100');
    });
});

i18next.init({
    lng: storedLang,
    resources: {
        en: {
            translation: {
                "login-title": "Login",
                "login-heading": "Login",
                "email-placeholder": "Email",
                "password-placeholder": "Password",
                "login-button": "Log in",
                "no-account": "Don't have an account ?",
                "pricing-link": "You don't have the right offer!",
                "basic": "Basic",
                "basic-description": "Ideal for testing automatic posting service on Threads",
                "pro": "Pro",
                "pro-description": "For daily posts and SEO analysis",
                "premium": "Premium",
                "premium-description": "For small businesses / enterprises",
                "choose": "Choose",
                "details": "Details",
                "sales-policy": "Sales Policy",
                "site-lang": "en",
                "site-title": "ThreadsFlow",
                "pricing": "Pricing",
                "about": "About",
                "logout": "Logout",
                "login": "Login",
                "footer-text": "\"Optimize your Threads,<br class=\"hidden md:block\"> maximize your results.\"",
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
                "hero-description": "ThreadsFlow, your analysis, tracking, and management tool for your Threads profile, designed to optimize your content strategy and maximize your engagement on the platform.",
                "privacy-policy-title": "Privacy Policy",
                "privacy-policy-heading": "Privacy Policy",
                "privacy-policy-paragraph": "This privacy policy explains how we collect, use, and protect your personal data when you use our service. We are committed to respecting your privacy and protecting your information in accordance with applicable laws.",
                "privacy-policy-section-1": "Collection of Information",
                "privacy-policy-section-1-description": "We collect personal information when you register on our site, log in, or use certain services. This may include your name, email address, and any other data you voluntarily provide.",
                "privacy-policy-section-2": "Use of Information",
                "privacy-policy-section-2-description": "We use your personal information to provide our services, improve your user experience, and communicate with you about our products and services.",
                "privacy-policy-section-3": "Protection of Information",
                "privacy-policy-section-3-description": "We implement security measures to protect your personal information from loss, misuse, or unauthorized access.",
                "privacy-policy-section-4": "Sharing of Information",
                "privacy-policy-section-4-description": "We do not share your personal information with third parties unless necessary for the provision of our services or when required by law.",
                "privacy-policy-section-5": "Your Rights",
                "privacy-policy-section-5-description": "You have the right to request access to your personal information, correct it, or request its deletion. To exercise your rights, please contact us through our contact page.",
                "privacy-policy-footer": "By using our service, you agree to this privacy policy. We reserve the right to modify this policy at any time, and we will inform you of any significant changes.",
                "sales-policy-title": "Sales Policy",
                "sales-policy-heading": "Sales Policy",
                "sales-policy-paragraph": "This sales policy explains the terms and conditions that apply when purchasing products or services on our website. We are committed to providing you with a smooth, transparent, and secure shopping experience.",
                "sales-policy-section-1": "Orders",
                "sales-policy-section-1-description": "By placing an order, you agree to the terms of sale outlined in this policy. We reserve the right to refuse any order if we believe it violates our policies.",
                "sales-policy-section-2": "Prices and Payment",
                "sales-policy-section-2-description": "Product or service prices are displayed in euros and include all applicable taxes. Payment must be made via the payment methods offered on our site.",
                "sales-policy-section-3": "Shipping",
                "sales-policy-section-3-description": "Products will be shipped to the address provided during the order process. Shipping fees are calculated at checkout based on the delivery address and item weight.",
                "sales-policy-section-4": "Returns and Refunds",
                "sales-policy-section-4-description": "If you are not satisfied with your purchase, you can return products within 30 days of receiving them. Please refer to our returns page for more details.",
                "sales-policy-section-5": "Liability",
                "sales-policy-section-5-description": "We cannot be held liable for any indirect or consequential loss or damage arising from the use of our products or services.",
                "sales-policy-footer": "By purchasing on our site, you agree to this sales policy. We reserve the right to modify this policy at any time and will inform you of any significant changes."
            }
        },
        fr: {
            translation: {
                "login-title": "Connexion",
                "login-heading": "Connexion",
                "email-placeholder": "Email",
                "password-placeholder": "Mot de passe",
                "login-button": "Se connecter",
                "no-account": "Pas de compte ?",
                "pricing-link": "Vous n'avez pas la bonne offre !",
                "pricing": "Nos prix",
                "basic": "Basique",
                "basic-description": "Idéal pour tester le service de publication automatique sur Threads",
                "pro": "Pro",
                "pro-description": "Pour les publications quotidiennes et analyser mon référencement",
                "premium": "Premium",
                "premium-description": "Pour les TPE / entreprises",
                "choose": "Choisir",
                "details": "Détails",
                "sales-policy": "Politique de vente",
                "site-lang": "fr",
                "site-title": "ThreadsFlow",
                "pricing": "Nos prix",
                "about": "À propos",
                "logout": "Déconnexion",
                "login": "Connexion",
                "footer-text": "\"Optimisez vos Threads,<br class=\"hidden md:block\"> maximisez vos résultats.\"",
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
                "hero-description": "ThreadsFlow, votre outil d'analyse, de suivi et de gestion de votre profil Threads, conçu pour optimiser votre stratégie de contenu et maximiser votre engagement sur la plateforme.",
                "privacy-policy-title": "Politique de confidentialité",
                "privacy-policy-heading": "Politique de confidentialité",
                "privacy-policy-paragraph": "Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre service. Nous nous engageons à respecter la confidentialité de vos informations et à les protéger conformément aux lois applicables.",
                "privacy-policy-section-1": "Collecte des informations",
                "privacy-policy-section-1-description": "Nous collectons des informations personnelles lorsque vous vous inscrivez sur notre site, vous vous connectez, ou vous utilisez certains services. Ces informations peuvent inclure votre nom, votre adresse e-mail, et toute autre donnée que vous fournissez volontairement.",
                "privacy-policy-section-2": "Utilisation des informations",
                "privacy-policy-section-2-description": "Nous utilisons vos informations personnelles pour fournir nos services, améliorer votre expérience utilisateur, et communiquer avec vous au sujet de nos produits et services.",
                "privacy-policy-section-3": "Protection des informations",
                "privacy-policy-section-3-description": "Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre toute perte, utilisation abusive ou accès non autorisé.",
                "privacy-policy-section-4": "Partage des informations",
                "privacy-policy-section-4-description": "Nous ne partageons vos informations personnelles avec des tiers que lorsque cela est nécessaire pour la fourniture de nos services ou lorsque la loi l'exige.",
                "privacy-policy-section-5": "Vos droits",
                "privacy-policy-section-5-description": "Vous avez le droit de demander l'accès à vos informations personnelles, de les corriger ou de demander leur suppression. Pour exercer vos droits, veuillez nous contacter via notre page de contact.",
                "privacy-policy-footer": "En utilisant notre service, vous acceptez cette politique de confidentialité. Nous nous réservons le droit de modifier cette politique à tout moment, et nous vous informerons de toute modification importante.",
                "sales-policy-title": "Politique de vente",
                "sales-policy-heading": "Politique de vente",
                "sales-policy-paragraph": "La présente politique de vente explique les termes et conditions qui s'appliquent lors de l'achat de produits ou de services sur notre site web. Nous nous engageons à vous offrir une expérience d'achat fluide, transparente et sécurisée.",
                "sales-policy-section-1": "Commandes",
                "sales-policy-section-1-description": "Lorsque vous passez une commande, vous acceptez les conditions de vente énoncées dans cette politique. Nous nous réservons le droit de refuser toute commande si nous estimons qu'elle viole nos politiques.",
                "sales-policy-section-2": "Prix et paiement",
                "sales-policy-section-2-description": "Les prix des produits ou services sont affichés en euros et incluent toutes les taxes applicables. Le paiement doit être effectué via les méthodes de paiement proposées sur notre site.",
                "sales-policy-section-3": "Livraison",
                "sales-policy-section-3-description": "Les produits seront expédiés à l'adresse fournie lors de la commande. Les frais de livraison sont calculés au moment du paiement en fonction de l'adresse de livraison et du poids des articles.",
                "sales-policy-section-4": "Retours et remboursements",
                "sales-policy-section-4-description": "Si vous n'êtes pas satisfait de votre achat, vous pouvez retourner les produits dans un délai de 30 jours à compter de la réception. Veuillez consulter notre page de retour pour plus de détails.",
                "sales-policy-section-5": "Responsabilité",
                "sales-policy-section-5-description": "Nous ne pouvons être tenus responsables des pertes ou dommages indirects ou consécutifs résultant de l'utilisation de nos produits ou services.",
                "sales-policy-footer": "En achetant sur notre site, vous acceptez cette politique de vente. Nous nous réservons le droit de modifier cette politique à tout moment et vous informerons des changements importants."
            }
        },
        es: {
            translation: {
                "login-title": "Conexión",
                "login-heading": "Conexión",
                "email-placeholder": "Correo electrónico",
                "password-placeholder": "Contraseña",
                "login-button": "Iniciar sesión",
                "no-account": "¿No tienes cuenta?",
                "pricing-link": "¡No tienes la oferta correcta!",
                "pricing": "Precios",
                "basic": "Básico",
                "basic-description": "Ideal para probar el servicio de publicación automática en Threads",
                "pro": "Pro",
                "pro-description": "Para publicaciones diarias y análisis SEO",
                "premium": "Premium",
                "premium-description": "Para pequeñas empresas / empresas",
                "choose": "Elegir",
                "details": "Detalles",
                "sales-policy": "Política de ventas",
                "site-lang": "es",
                "site-title": "ThreadsFlow",
                "pricing": "Precios",
                "about": "Acerca de",
                "logout": "Cerrar sesión",
                "login": "Iniciar sesión",
                "footer-text": "\"Optimiza tus hilos,<br class=\"hidden md:block\"> maximiza tus resultados.\"",
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
                "hero-description": "ThreadsFlow, tu herramienta de análisis, seguimiento y gestión de tu perfil en Threads, diseñada para optimizar tu estrategia de contenido y maximizar tu compromiso en la plataforma.",
                "privacy-policy-title": "Política de privacidad",
                "privacy-policy-heading": "Política de privacidad",
                "privacy-policy-paragraph": "Esta política de privacidad explica cómo recopilamos, usamos y protegemos sus datos personales cuando utiliza nuestro servicio. Nos comprometemos a respetar su privacidad y a proteger su información de acuerdo con las leyes aplicables.",
                "privacy-policy-section-1": "Recopilación de información",
                "privacy-policy-section-1-description": "Recopilamos información personal cuando se registra en nuestro sitio, inicia sesión o utiliza ciertos servicios. Esto puede incluir su nombre, dirección de correo electrónico y cualquier otro dato que proporcione voluntariamente.",
                "privacy-policy-section-2": "Uso de la información",
                "privacy-policy-section-2-description": "Utilizamos su información personal para proporcionar nuestros servicios, mejorar su experiencia de usuario y comunicarnos con usted sobre nuestros productos y servicios.",
                "privacy-policy-section-3": "Protección de la información",
                "privacy-policy-section-3-description": "Implementamos medidas de seguridad para proteger su información personal contra pérdidas, mal uso o acceso no autorizado.",
                "privacy-policy-section-4": "Compartir información",
                "privacy-policy-section-4-description": "No compartimos su información personal con terceros, a menos que sea necesario para la prestación de nuestros servicios o cuando la ley lo exija.",
                "privacy-policy-section-5": "Sus derechos",
                "privacy-policy-section-5-description": "Usted tiene derecho a solicitar el acceso a su información personal, corregirla o solicitar su eliminación. Para ejercer sus derechos, póngase en contacto con nosotros a través de nuestra página de contacto.",
                "privacy-policy-footer": "Al utilizar nuestro servicio, acepta esta política de privacidad. Nos reservamos el derecho de modificar esta política en cualquier momento, y le informaremos sobre cualquier cambio importante.",
                "sales-policy-title": "Política de ventas",
                "sales-policy-heading": "Política de ventas",
                "sales-policy-paragraph": "Esta política de ventas explica los términos y condiciones que se aplican al comprar productos o servicios en nuestro sitio web. Nos comprometemos a ofrecerle una experiencia de compra fluida, transparente y segura.",
                "sales-policy-section-1": "Órdenes",
                "sales-policy-section-1-description": "Al realizar un pedido, acepta los términos de venta establecidos en esta política. Nos reservamos el derecho de rechazar cualquier pedido si creemos que viola nuestras políticas.",
                "sales-policy-section-2": "Precios y pagos",
                "sales-policy-section-2-description": "Los precios de los productos o servicios se muestran en euros e incluyen todos los impuestos aplicables. El pago debe realizarse mediante los métodos de pago ofrecidos en nuestro sitio.",
                "sales-policy-section-3": "Envío",
                "sales-policy-section-3-description": "Los productos se enviarán a la dirección proporcionada durante el pedido. Los gastos de envío se calculan en el momento del pago según la dirección de entrega y el peso de los artículos.",
                "sales-policy-section-4": "Devoluciones y reembolsos",
                "sales-policy-section-4-description": "Si no está satisfecho con su compra, puede devolver los productos dentro de los 30 días posteriores a la recepción. Consulte nuestra página de devoluciones para obtener más detalles.",
                "sales-policy-section-5": "Responsabilidad",
                "sales-policy-section-5-description": "No podemos ser responsables de ninguna pérdida o daño indirecto o consecuente que surja del uso de nuestros productos o servicios.",
                "sales-policy-footer": "Al comprar en nuestro sitio, acepta esta política de ventas. Nos reservamos el derecho de modificar esta política en cualquier momento e informaremos sobre los cambios importantes."
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
