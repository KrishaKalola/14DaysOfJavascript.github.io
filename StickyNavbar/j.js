const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const topOfNavbar = navbar.offsetTop;
console.log(topOfNavbar);

window.addEventListener('scroll', fixNavbar);

function fixNavbar() {
    console.log(window.scrollY);
    if (window.scrollY >= topOfNavbar) {
        body.classList.add('fixed');
        const navHeight = navbar.offsetHeight;
        body.style.paddingTop = navHeight + 'px';
    }
    else {
        body.classList.remove('fixed');
        body.style.paddingTop = 0;
    }
}