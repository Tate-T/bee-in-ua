document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mainNav = document.querySelector('.main-nav');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        mainNav.classList.toggle('open');
    });
});