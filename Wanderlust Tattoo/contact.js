// Selectors
const menuToggle = document.querySelector('.menu-toggle');
const fullPageMenu = document.querySelector('.full-page-menu');
const closeMenu = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle navigation with transition effect
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            document.body.classList.add('transition');

            setTimeout(() => {
                window.location.href = target;
            }, 500); // Delay to allow transition effect
        });
    });
});

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (closeMenu) {
    closeMenu.addEventListener('click', closeMenuHandler);
}

window.addEventListener('scroll', handleScroll);

// Functions
function toggleMenu() {
    if (fullPageMenu) {
        fullPageMenu.classList.toggle('active');
        document.body.style.overflow = fullPageMenu.classList.contains('active') ? 'hidden' : 'auto'; // Prevent scrolling when menu is open
    }
}

function closeMenuHandler() {
    if (fullPageMenu) {
        fullPageMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

function handleScroll() {
    if (navbar) {
        navbar.style.backgroundColor = window.scrollY > 50 ? '#171717' : 'transparent';
    }
}
