'use strict';

let responsiveNav, nav;
responsiveNav = document.querySelector('.nav-collapse');
nav = document.querySelector('.nav-modifier');

responsiveNav.addEventListener('click', _ => {
    if(nav.style.display === 'none') {
        responsiveNav.classList.add('open');
        nav.style.display = 'block';
    } else {
        responsiveNav.classList.remove('open');
        nav.style.display = 'none';
    }
});

