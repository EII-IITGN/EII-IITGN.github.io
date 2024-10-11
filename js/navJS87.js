const nav87 = document.querySelector('.nav87');
const nav87Btn = document.querySelector('.nav87Btn');

nav87Btn.addEventListener('click', () => {
    if(nav87.classList.contains('nav87active')) {
        nav87.classList.remove('nav87active');
        nav87.classList.add('nav87inactive');
        return;
    }
    nav87.classList.remove('nav87inactive');
    nav87.classList.add('nav87active');
});