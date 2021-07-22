const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navButton = document.querySelectorAll('.nav-button');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

for (i in navButton) {
    navButton[i].addEventListener('click', () => {
        navbar.classList.toggle('change');  
    });
}
// navButton.addEventListener('click', () => {
//     navbar.classList.toggle('change');  
// });
