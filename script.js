/* =========================
   i18n (EN/FR) - no frameworks
   ========================= */

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.welcome": "Welcome to my portfolio",
    "hero.subtitle": "Tech Specialist in Systems & Networks | IT Infrastructure | Cybersecurity Enthusiast",
    "hero.desc":
      "I design and maintain robust IT systems, secure networks, and create elegant technical solutions. Specialized in Windows/Linux administration, with a passion for automation and cybersecurity.",
    "hero.ctaWork": "View My Work",
    "hero.ctaCv": "Download CV",

    "about.title": "About Me",
    "about.subtitle": "My journey in technology",
    "about.text1": "I'm a recently certified Technicien Spécialisé en Systèmes et Réseaux from CCINFO with a strong passion for IT infrastructure, system administration, and cybersecurity. Through two years of intensive study, I've developed a comprehensive skill set across multiple domains including Windows/Linux administration, networking, and security.",
    "about.text2": "Beyond infrastructure, I'm a programmer at heart—using Python and Java to automate tasks, solve complex problems, and create intelligent solutions. I bridge the gap between operations and development, ensuring systems are not just secure, but also efficient and scalable.",
    "about.text3": "My goal is to build reliable, secure, and innovative IT solutions that make a real impact. Whether it's implementing Active Directory for enterprise environments, setting up secure networks, or developing automation tools, I approach every project with precision and dedication.",

    "skills.title": "Technical Skills",
    "skills.subtitle": "Expertise across multiple domains",
    "skills.network-admin": "Network Administration",
    "skills.systems-admin": "Systems Administration",
    "skills.cybersecurity": "Cybersecurity",
    "skills.programming": "Programming & Development",

    "skills.ip-subnetting": "IP Addressing & Subnetting",

    "skills.windows-server": "Windows Server Admin",
    "skills.server-maintenance": "Server Maintenance",
    "skills.user-management": "User Management",
    "skills.network-security": "Network Security",
    "skills.firewall-config": "Firewall Configuration",
    "skills.system-monitoring": "System Monitoring",
    "skills.threat-prevention": "Threat Prevention",
    "skills.programming": "Programming & Development",
    "skills.web-dev": "Web Development (HTML/CSS/JS)",
    "skills.automation": "Automation & Scripting",

    "skills.tech-stack": "Technology Stack",
    "skills.windows-server": "Windows Server",
    "skills.firewalls": "Firewalls",
    "skills.load-balancing": "Load Balancing",
    "skills.backup-solutions": "Backup Solutions",

    "projects.title": "Featured Projects",
    "projects.subtitle": "Showcasing my technical expertise and innovation",

    "projects.leo.description": "A smart voice-powered assistant built with Python. Leo understands natural commands, controls your PC, checks weather, and learns from user interactions. This project demonstrates API integration, voice processing, and automation skills.",
    "projects.leo.tech.voice": "Voice Recognition",
    "projects.leo.demo": "View Demo →",

    "projects.arc-raiders.title": "Arc Raiders Fan Guide",
    "projects.arc-raiders.description": "A comprehensive resource guide for the Arc Raiders community. Includes gameplay mechanics, tips, strategies, and community information. Built with responsive design principles and organized information architecture.",
    "projects.arc-raiders.visit-site": "Visit Site →",
    "skills.responsive-design": "Responsive Design",
    "skills.web-dev": "Web Development",

    "projects.admin-dashboard.title": "Admin Dashboard – Portfolio Management",
    "projects.admin-dashboard.description":
      "A secure admin dashboard used to manage portfolio projects. Features authentication, demo mode restrictions, full CRUD operations, and real-time data storage using Supabase. Built with vanilla JavaScript and hosted on GitHub Pages.",
    "projects.admin-dashboard.demo": "Live Demo →",
    "projects.admin-dashboard.demo-note": "Demo access available • Editing & delete disabled",
    "skills.github-pages": "GitHub Pages",

    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's discuss your IT needs and how I can help",

    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.connect": "Connect With Me",

    "footer.rights": "© 2026 Nabil Jouahry. All rights reserved. | Tech Specialist & Developer",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "hero.welcome": "Bienvenue sur mon portfolio",
    "hero.subtitle": "Spécialiste IT en Systèmes & Réseaux | Infrastructure | Passionné de Cybersécurité",
    "hero.desc":
      "Je conçois et maintiens des systèmes informatiques robustes, des réseaux sécurisés et des solutions techniques élégantes. Spécialisé en administration Windows/Linux, avec une passion pour l’automatisation et la cybersécurité.",
    "hero.ctaWork": "Voir mes projets",
    "hero.ctaCv": "Télécharger le CV",

    "about.title": "À propos de moi",
    "about.subtitle": "Mon parcours dans la technologie",
    "about.text1": "Je suis un Technicien Spécialisé en Systèmes et Réseaux récemment certifié par CCINFO, avec une forte passion pour l'infrastructure IT, l'administration système et la cybersécurité. Grâce à deux années d'études intensives, j'ai développé un ensemble de compétences complet dans plusieurs domaines, y compris l'administration Windows/Linux, le réseautage et la sécurité.",
    "about.text2": "Au-delà de l'infrastructure, je suis un programmeur dans l'âme - utilisant Python et Java pour automatiser les tâches, résoudre des problèmes complexes et créer des solutions intelligentes. Je fais le lien entre les opérations et le développement, assurant que les systèmes ne sont pas seulement sécurisés, mais aussi efficaces et évolutifs.",
    "about.text3": "Mon objectif est de construire des solutions IT fiables, sécurisées et innovantes qui ont un impact réel. Que ce soit pour implémenter Active Directory pour les environnements d'entreprise, mettre en place des réseaux sécurisés ou développer des outils d'automatisation, j'aborde chaque projet avec précision et dévouement.",

    "skills.title": "Compétences techniques",
    "skills.subtitle": "Expertise sur plusieurs domaines",
    "skills.network-admin": "Administration Réseau",
    "skills.systems-admin": "Administration Système",
    "skills.cybersecurity": "Cybersécurité",
    "skills.programming": "Programmation & Développement",
    "skills.ip-subnetting": "Adressage IP & Subnetting",

    "skills.windows-server": "Admin Windows Server",
    "skills.server-maintenance": "Maintenance Serveur",
    "skills.user-management": "Gestion des utilisateurs",
    "skills.network-security": "Sécurité réseau",
    "skills.firewall-config": "Configuration de pare-feu",
    "skills.firewalls": "Pare-feu",
    "skills.threat-prevention": "Prévention des menaces",
    "skills.programming": "Programmation & Développement",
    "skills.web-dev": "Développement Web (HTML/CSS/JS)",
    "skills.system-monitoring": "Surveillance système",
    "skills.load-balancing": "Équilibrage de charge",
    "skills.backup-solutions": "Solutions de sauvegarde",

    "projects.title": "Projets phares",
    "projects.subtitle": "Mes réalisations et mon expertise technique",

    "projects.leo.description": "Un assistant intelligent à commande vocale construit avec Python. Leo comprend les commandes naturelles, contrôle votre PC, vérifie la météo et apprend des interactions utilisateur. Ce projet démontre l'intégration d'API, le traitement vocal et les compétences en automatisation.",
    "projects.leo.tech.voice": "Reconnaissance vocale",
    "projects.leo.demo": "Voir la démo →",
    
    "projects.arc-raiders.title": "Guide pour les fans d'Arc Raiders",
    "projects.arc-raiders.description": "Une ressource complète pour la communauté Arc Raiders. Comprend les mécaniques de jeu, des astuces, des stratégies et des informations communautaires. Construit avec des principes de design responsive et une architecture d'information organisée.",
    "projects.arc-raiders.visit-site": "Visiter le site →",
    "skills.responsive-design": "Design Responsive",
    "skills.web-dev": "Développement Web",

    "projects.admin-dashboard.title": "Tableau de bord admin – Gestion de portfolio",
    "projects.admin-dashboard.description":
      "Un tableau de bord admin sécurisé utilisé pour gérer les projets du portfolio. Comprend l'authentification, des restrictions de mode démo, des opérations CRUD complètes et un stockage de données en temps réel utilisant Supabase. Construit avec JavaScript vanilla et hébergé sur Pages Github.",
    "projects.admin-dashboard.demo": "Démo en direct →",
    "projects.admin-dashboard.demo-note": "Accès démo disponible • Édition & suppression désactivées",
    "skills.github-pages": "Pages GitHub",

    "contact.title": "Contact",
    "contact.subtitle": "Discutons de vos besoins IT et de la manière dont je peux aider",

    "contact.form.name": "Votre nom",
    "contact.form.email": "Votre email",
    "contact.form.message": "Votre message",
    "contact.form.send": "Envoyer",
    "contact.connect": "Connectez-vous avec moi",

    "footer.rights": "© 2026 Nabil Jouahry. Tous droits réservés. | Spécialiste IT & Développeur",
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = dict[key];
    if (!text) return;

    // If it's an input/textarea placeholder
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // Update active state
  const btnEn = document.getElementById("lang-en");
  const btnFr = document.getElementById("lang-fr");
  if (btnEn && btnFr) {
    btnEn.classList.toggle("active", lang === "en");
    btnFr.classList.toggle("active", lang === "fr");
  }

  // Set <html lang="">
  document.documentElement.setAttribute("lang", lang);

  localStorage.setItem("lang", lang);
}

function initLanguage() {
  // Prefer saved choice, else browser language
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  const lang = saved || browser;

  applyLanguage(lang);

  document.getElementById("lang-en")?.addEventListener("click", () => applyLanguage("en"));
  document.getElementById("lang-fr")?.addEventListener("click", () => applyLanguage("fr"));
}

/* =========================
   Smooth scroll for anchors
   ========================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =========================
   Navbar shadow on scroll
   ========================= */

function initNavbarShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    navbar.style.boxShadow = currentScroll <= 0
      ? '0 0 0 transparent'
      : '0 5px 20px rgba(0, 212, 255, 0.1)';
  });
}

/* =========================
   Video demo modal (fixed)
   ========================= */

function initVideoModal() {
  const demoButtons = document.querySelectorAll('.btn-demo, .project-link.btn-demo');
  const videoModal = document.getElementById('video-modal');
  const demoVideo = document.getElementById('demo-video');
  const demoSource = demoVideo ? demoVideo.querySelector('source') : null;
  const closeBtn = document.querySelector('.video-close');

  if (!videoModal || !demoVideo || !demoSource) return;

  function openVideo(src) {
    if (!src) return;
    demoSource.src = src;
    demoVideo.load();
    videoModal.classList.add('open');
    demoVideo.play().catch(() => {});
  }

  function closeVideo() {
    videoModal.classList.remove('open');
    try { demoVideo.pause(); } catch (e) {}
    demoVideo.currentTime = 0;
    demoSource.src = '';
    demoVideo.load();
  }

  demoButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If the button is a normal link (YouTube), don't open modal
      const href = btn.getAttribute("href") || "";
      if (href.startsWith("http")) return;

      e.preventDefault();
      const src = btn.dataset.video || btn.getAttribute('data-video');
      openVideo(src);
    });
  });

  closeBtn?.addEventListener('click', closeVideo);

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal || e.target.classList.contains('video-modal-backdrop')) {
      closeVideo();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });
}

/* =========================
   Skill bars animation
   ========================= */

function initSkillBars() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'expandWidth 1s ease-out forwards';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5, rootMargin: '0px' });

  document.querySelectorAll('.skill-progress').forEach(el => observer.observe(el));
}

/* =========================
   Animate elements on scroll
   ========================= */

function initRevealAnimations() {
  const elementObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideUp 0.8s ease forwards';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.project-card, .skill-category, .stat-card, .info-card')
    .forEach(el => elementObserver.observe(el));
}

/* =========================
   Mobile menu toggle
   ========================= */

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) navLinks.style.display = 'none';
    });
  });
}

/* =========================
   Form UX (Formspree)
   ========================= */

function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', () => {
    const submitBtn = contactForm.querySelector('button');
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }
  });
}

/* =========================
   Active nav link highlight
   ========================= */

function initActiveNav() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.style.color = 'var(--text-secondary)';
        });
        if (navLink) navLink.style.color = 'var(--primary)';
      }
    });
  });
}

/* =========================
   Particles
   ========================= */

function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 100 + 50 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `radial-gradient(circle, rgba(0, 212, 255, ${Math.random() * 0.15}), transparent)`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.pointerEvents = 'none';
    particle.style.animation = `float ${10 + Math.random() * 10}s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 5 + 's';

    hero.style.position = 'relative';
    hero.appendChild(particle);
  }
}

/* =========================
   ESC closes mobile menu
   ========================= */

function initEscCloseMenu() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.style.display = 'none';
  });
}

/* =========================
   Init
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initSmoothScroll();
  initNavbarShadow();
  initVideoModal();
  initSkillBars();
  initRevealAnimations();
  initMobileMenu();
  initContactForm();
  initActiveNav();
  initEscCloseMenu();
  createParticles();
});
