// ===================================
// Folusho Joseph Portfolio - Scripts
// ===================================

// Navigation scroll effect
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation class to hero rotating words for seamless loop
const rotatingWrapper = document.querySelector('.hero-rotating');
if (rotatingWrapper) {
    // Clone first word to end for seamless loop
    const firstWord = rotatingWrapper.querySelector('.rotating-word');
    if (firstWord) {
        const clone = firstWord.cloneNode(true);
        rotatingWrapper.appendChild(clone);
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('.service-card, .work-card, .about-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Console Easter egg
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold;');
console.log('%cLooking for a brand designer? Let\'s talk: Emmanuelfolushojoseph@gmail.com', 'font-size: 14px; color: #888;');
