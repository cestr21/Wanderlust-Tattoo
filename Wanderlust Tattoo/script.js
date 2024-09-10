// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const fullPageMenu = document.querySelector('.full-page-menu');
const closeMenu = document.querySelector('.close-menu');
const sections = document.querySelectorAll('.artwork-section');
const navbar = document.querySelector('.navbar');
const heroArrow = document.querySelector('.hero-arrow'); // Ensure this is the correct selector

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', closeMenuHandler);
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', ensureArtworkVisibilityOnLoad);
heroArrow.addEventListener('click', scrollToSection1); // Updated to new function

// Page Transition
document.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        event.preventDefault();
        const link = event.target.getAttribute('href');
        document.body.classList.add('transition');

        setTimeout(() => {
            window.location.href = link;
        }, 500); // Match the duration of the CSS animation
    }
});

// Functions
function toggleMenu() {
    fullPageMenu.classList.toggle('active');
}

function closeMenuHandler() {
    fullPageMenu.classList.remove('active');
}

function handleScroll() {
    handleNavbarScroll();
    handleArtworkVisibility();
}

function handleNavbarScroll() {
    navbar.style.backgroundColor = window.scrollY > 50 ? '#171717' : 'transparent';
}

function handleArtworkVisibility() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

function ensureArtworkVisibilityOnLoad() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
}

// Smooth scroll function
function scrollToSection1(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const section1 = document.getElementById('section1');

    // Smooth scroll with additional options
    section1.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the top of the element to the top of the viewport
    });
}
