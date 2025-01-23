const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});




let lastScrollY = window.scrollY;

// Scroll behavior to hide/show the navbar
window.addEventListener('scroll', () => {
    if (window.innerWidth >= 901) { // Check if screen width is 900px or more
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
            header.style.backgroundColor = 'transparent';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
    }
    lastScrollY = window.scrollY;
});


window.addEventListener('resize', () => {
    if (window.innerWidth < 900) {
        navbar.style.transform = 'translateY(0)'; // Reset for smaller screens
    }
});







