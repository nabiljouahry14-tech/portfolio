// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 0 0 transparent';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
    }
    
    lastScroll = currentScroll;

    // Video demo modal handling
    (() => {
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
                const src = btn.dataset.video || btn.getAttribute('data-video');
                openVideo(src);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeVideo);

        // Close when clicking backdrop
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal || e.target.classList.contains('video-modal-backdrop')) {
                closeVideo();
            }
        });

        // Close on Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVideo();
        });
    })();
});

// Skill bars animation on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'expandWidth 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(el => {
    observer.observe(el);
});

// Animate elements on scroll
const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
            elementObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.project-card, .skill-category, .stat-card, .info-card').forEach(el => {
    elementObserver.observe(el);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when a link is clicked (only on mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Only close if screen is small (mobile)
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
}

// Form submission handling - Let Formspree handle it naturally
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Don't prevent default - let Formspree handle it
        const submitBtn = contactForm.querySelector('button');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// Active nav link highlighting
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
            if (navLink) {
                navLink.style.color = 'var(--primary)';
            }
        }
    });
});

// Particle background effect (optional enhancement)
const createParticles = () => {
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
};

document.addEventListener('DOMContentLoaded', createParticles);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = 'none';
        }
    }
});

// Lazy load images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
