/*Altera a cor do header quando o scroll é acionado */
var navbar = document.querySelector('header')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 10) {
        navbar.classList.add('scrolled')
        navbar.style.backgroundColor = '#051a38';
    } if (window.pageYOffset < 10) {
        navbar.classList.remove('scrolled');
        navbar.style.backgroundColor = 'transparent';
    }
}