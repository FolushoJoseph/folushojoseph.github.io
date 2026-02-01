// Folusho.Design - Scripts

// Navigation scroll effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.borderBottom = '1px solid #222';
    } else {
        nav.style.borderBottom = 'none';
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Clone first rotating word for seamless loop
const rotatingText = document.querySelector('.rotating-text');
if (rotatingText) {
    const firstWord = rotatingText.querySelector('.rotating-word');
    if (firstWord) {
        const clone = firstWord.cloneNode(true);
        rotatingText.appendChild(clone);
    }
}

// Copy email function
function copyEmail() {
    const email = 'Emmanuelfolushojoseph@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Console Easter egg
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold;');
console.log('%cLooking for a brand designer? Email: Emmanuelfolushojoseph@gmail.com', 'font-size: 14px; color: #888;');
