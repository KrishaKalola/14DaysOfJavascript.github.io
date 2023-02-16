let bar = document.querySelector('.animated-bar');
bar.addEventListener('click', animateBar);

function animateBar(){
    bar.classList.toggle('active');
}