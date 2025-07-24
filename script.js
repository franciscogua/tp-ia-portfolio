const translations = {
    en: {
        name: "Francisco Guarino Crespo",
        role: "Java & Salesforce Developer",
        navAbout: "About",
        navSkills: "Skills",
        navCerts: "Certifications",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutText: `Passionate developer and student of the Higher Technicature in Applied Computer Science (UTN), with a strong focus on the Java ecosystem and the Salesforce platform. I am looking for my first job opportunity to apply my knowledge, join challenging projects, and continue to grow professionally.<br /><br />I stand out for being a proactive, creative person with a strong curiosity that drives me to constantly learn. I am ready to join a team, add value from day one, and continue developing my skills.`,
        skillsTitle: "Technical Skills",
        certsTitle: "Certifications",
        cert1Title: "Salesforce Platform Developer I",
        cert2Title: "Java Full Stack Developer",
        cert3Title: "Intermediate Java Developer",
        cert4Title: "C2 Proficient Certificate",
        eduTitle: "Education",
        edu1Title: "Associate's Degree in Applied Computer Science",
        edu1Org: "INSPT, UTN (2023 - present)",
        edu2Title: "Associate's Degree in Sound and Music Production",
        edu2Org: "TAMABA (2018 - 2022)",
        contactTitle: "Contact",
        contactText: "Let's connect! I'm open to new opportunities.",
        pdfLink: "View Project Creation Process (PDF)",
        cert1Detail: "Comprehensive training in application development on the Salesforce platform. Covers Apex programming for custom logic, SOQL and SOSL for data management, process automation with Flow Builder, and best practices in security, testing, and system integration.",
        cert2Detail: "Full-stack training covering Front-End with HTML, CSS, Bootstrap, and JavaScript, and Back-End with Java (Servlets, JSP). The final project involved building a web application using the Model-View-Controller (MVC) pattern with Spring Boot, managing the project with Git/GitHub for version control and effective team collaboration.",
        cert3Detail: "Deepened knowledge of the Java language and Object-Oriented Programming (OOP). Covered advanced topics such as Design Patterns, Functional Interfaces, Persistence with JPA/Hibernate (ORM), unit testing with JUnit, and database integration using JDBC.",
        cert4Detail: "This certificate attests to an advanced and fluent command of English, comparable to that of a highly educated native speaker. It certifies the ability to understand virtually everything heard or read, summarize information from different sources, and express oneself spontaneously, precisely, and with nuance in complex academic or professional contexts.",
        edu1Detail: "Academic training focused on software development and data management. The curriculum includes implementing group projects with Java and Spring Boot, using Git for version control. It delves into low-level languages like C, with a focus on dynamic data structures and pointers, and provides a solid command of SQL for managing relational databases with MySQL. The program also covers computation theory through the practical construction of a compiler for the PL/0 language.",
        edu2Detail: "Technical and artistic training in recording, editing, mixing, and sound post-production. The program covered the use of digital audio workstations (DAWs), microphone techniques, and acoustic principles, providing a solid foundation in both the creative and technical aspects of sound engineering."
    },
    es: {
        name: "Francisco Guarino Crespo",
        role: "Desarrollador Java & Salesforce",
        navAbout: "Acerca de",
        navSkills: "Habilidades",
        navCerts: "Certificaciones",
        navContact: "Contacto",
        aboutTitle: "Acerca de Mí",
        aboutText: `Desarrollador apasionado y estudiante de la Tecnicatura Superior en Informática Aplicada (UTN), con un fuerte enfoque en el ecosistema Java y la plataforma Salesforce. Busco mi primera oportunidad laboral para aplicar mis conocimientos, sumarme a proyectos desafiantes y seguir creciendo profesionalmente.<br /><br/>Me destaco por ser una persona proactiva, creativa y con una fuerte curiosidad que me impulsa a aprender constantemente. Estoy preparado para integrarme a un equipo, aportar valor desde el primer día y seguir desarrollando mis habilidades.`,
        skillsTitle: "Habilidades Técnicas",
        certsTitle: "Certificaciones",
        cert1Title: "Salesforce Platform Developer I",
        cert2Title: "Desarrollador Java Full Stack",
        cert3Title: "Desarrollador Java Intermedio",
        cert4Title: "C2 Proficient Certificate",
        eduTitle: "Educación",
        edu1Title: "Tecnicatura Superior en Informática Aplicada",
        edu1Org: "INSPT, UTN (2023 - presente)",
        edu2Title: "Tecnicatura Superior en Sonido y Producción Musical",
        edu2Org: "TAMABA (2018 - 2022)",
        contactTitle: "Contacto",
        contactText: "¡Conectemos! Estoy abierto a nuevas oportunidades.",
        pdfLink: "Ver Proceso de Creación del Proyecto (PDF)",
        cert1Detail: "Formación integral en el desarrollo de aplicaciones sobre la plataforma Salesforce. Abarca programación en Apex para lógica personalizada, manejo de bases de datos con SOQL y SOSL, automatización de procesos con Flow Builder, y buenas prácticas en seguridad, pruebas e integración con sistemas externos.",
        cert2Detail: "Formación completa que cubrió Front-End con HTML, CSS, Bootstrap y JavaScript, y Back-End con Java (Servlets, JSP). El proyecto final consistió en desarrollar una aplicación web aplicando el patrón Modelo-Vista-Controlador (MVC) con Spring Boot, gestionando el proyecto con Git/GitHub para el control de versiones y la colaboración efectiva en equipo.",
        cert3Detail: "Profundización en el lenguaje Java y la Programación Orientada a Objetos (POO). Se cubrieron temas avanzados como Patrones de Diseño, Interfaces Funcionales, Persistencia con JPA/Hibernate (ORM), pruebas unitarias con JUnit e integración de bases de datos mediante JDBC.",
        cert4Detail: "Este certificado acredita una competencia avanzada y fluida en inglés, comparable a la de un hablante nativo altamente formado. Certifica la capacidad de comprender prácticamente todo lo que se oye o lee, resumir información de distintas fuentes y expresarse de forma espontánea, precisa y con matices en contextos académicos o profesionales complejos.",
        edu1Detail: "Formación académica enfocada en el desarrollo de software y la gestión de datos. El plan de estudios incluye la implementación de proyectos grupales con Java y Spring Boot, utilizando Git para el control de versiones. Se profundiza en lenguajes de bajo nivel como C, con un enfoque en estructuras de datos dinámicas y punteros, y se adquiere un manejo sólido de SQL para la gestión de bases de datos relacionales con MySQL. El programa también abarca la teoría de la computación a través de la construcción práctica de un compilador para el lenguaje PL/0.",
        edu2Detail: "Formación técnica y artística en las áreas de grabación, edición, mezcla y postproducción de sonido. La carrera abarcó el manejo de software de producción musical (DAWs), técnicas de microfoneo y principios de acústica, proporcionando una base sólida tanto en los aspectos creativos como técnicos de la ingeniería de sonido."
    }
};

let currentLang = 'es';
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');
const themeSwitcher = document.getElementById('theme-switcher');
const themeIcon = themeSwitcher.querySelector('i');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeModalBtn = document.getElementById('modal-close');
const allCards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('section, footer');

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('language', lang);
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    btnEs.classList.toggle('active', lang === 'es');
    btnEn.classList.toggle('active', lang === 'en');
};

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
};

btnEs.addEventListener('click', () => setLanguage('es'));
btnEn.addEventListener('click', () => setLanguage('en'));

themeSwitcher.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

allCards.forEach(card => {
    card.addEventListener('click', () => {
        const certId = card.getAttribute('data-cert-id');
        const eduId = card.getAttribute('data-edu-id');
        let titleKey, detailKey;

        if (certId) {
            titleKey = `${certId}Title`;
            detailKey = `${certId}Detail`;
        } else if (eduId) {
            titleKey = `${eduId}Title`;
            detailKey = `${eduId}Detail`;
        }

        if (titleKey && detailKey) {
            modalTitle.innerText = translations[currentLang][titleKey];
            modalText.innerHTML = translations[currentLang][detailKey];
            modalOverlay.classList.add('visible');
        }
    });
});

const closeModal = () => {
    modalOverlay.classList.remove('visible');
};

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    const savedTheme = localStorage.getItem('theme') || 'light';
    setLanguage(savedLang);
    setTheme(savedTheme);
});