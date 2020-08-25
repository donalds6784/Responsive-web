'use strict';

let responsiveNav, nav;
responsiveNav = document.querySelector('.nav-collapse');
nav = document.querySelector('.nav-modifier');
let navIsOpen = false;

responsiveNav.addEventListener('click', _ => {
    if(!navIsOpen  ) {
        responsiveNav.classList.add('open'); //helps to style the toggle lines
        nav.style.display = 'block'; //reviews the nav
        navIsOpen = true;
    } else {
        responsiveNav.classList.remove('open'); //toggle button returns to normal
        nav.style.display = 'none';
        navIsOpen = false;
    }
});


//========================================
//         CONTACT-PAGE CONTENT
//========================================
    let i, images, timeTaken;
    i = 0;
    images = [];
    timeTaken = 5000;
    images[0] = '../esccug/assets/images/homepage/2g.jpg';
    images[1] = '../esccug/assets/images/homepage/8c9efc1d-9683-4fff-b326-aeefd4f2318d-1468843550228.jpg';
    images[2] = '../esccug/assets/images/homepage/AdobeStock_101418524.jpeg'

    function imagesSlider() {
        document.slide.src = images[i];
        if(i < images.length-1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout('imagesSlider()', timeTaken);
    }

    window.onload = imagesSlider;


//========================================
//           HOMEPAGE SLIDER
//========================================

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const auto = true;
const intervalTime = 6000;
let slideInterval;

const nextSlide = _ => {
    // Gets current class
    const current = document.querySelector('.current');
    // removes current class
    current.classList.remove('current');
    // check for current slide
    if(current.nextElementSibling) {
        // add current to the next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to the first slide 
        slides[0].classList.add('current');
    }

    setTimeout( _ => current.classList.remove('current'));

}

const prevSlide = _ => {
    // Gets current class
    const current = document.querySelector('.current');
    // removes current class
    current.classList.remove('current');
    // check for current slide
    if(current.previousElementSibling) {
        // add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to the last slide 
        slides[slides.length-1].classList.add('current');
    }

    setTimeout( _ => current.classList.remove('current'));

}

next.addEventListener('click', e => {
    nextSlide();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();

    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide 

if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
} 

document.querySelector('');

//==========================================
//
//==========================================
// /*