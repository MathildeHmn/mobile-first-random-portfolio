// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

// Show and remove menu
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home
sr.reveal('.home-title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home-img',{delay: 400});
sr.reveal('.home-social-icon',{interval: 200});

// About
sr.reveal('.about-img',{});
sr.reveal('.about-subtitle',{delay: 200});
sr.reveal('.about-text',{delay: 400});

// Skills
sr.reveal('.skills-subtitle',{});
sr.reveal('.skills-text',{delay: 200});
sr.reveal('.skills-data',{interval: 200});
sr.reveal('.skills-img',{delay: 400});

// Work
sr.reveal('.work-img',{interval: 200});

// Contact
sr.reveal('.contact-input',{interval: 200});
