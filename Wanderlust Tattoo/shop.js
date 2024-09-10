// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const fullPageMenu = document.querySelector('.full-page-menu');
const closeMenu = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', closeMenuHandler);
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleInitialScroll);

// Page Transition
document.addEventListener('click', (event) => {
    if (event.target.matches('.full-page-menu a')) {
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
}

function handleNavbarScroll() {
    navbar.style.backgroundColor = window.scrollY > 50 ? '#171717' : 'transparent';
}

function handleInitialScroll() {
    // Initial setup if needed
}
