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

