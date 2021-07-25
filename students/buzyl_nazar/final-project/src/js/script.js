import $ from 'jquery';

// Burger btn
let btn = document.querySelector('#burgerMenuBtnItem');
btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});

// Open - Close
loginOpen.addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "block";
});
loginClose.addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "none";
});