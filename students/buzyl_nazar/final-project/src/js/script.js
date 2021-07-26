import $ from 'jquery';
import './login-form';

// Burger btn
let btn = document.querySelector('#burgerMenuBtnItem');
btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});

// Open - Close Login - Form

// loginOpen.addEventListener("click", function () {
//     document.getElementById("loginForm").style.display = "block";
//     document.documentElement.classList.add('login-open');

// });
// loginClose.addEventListener("click", function () {
//     document.getElementById("loginForm").style.display = "none";
//     document.documentElement.classList.remove('login-open');
// });

const loginOpen = document.querySelector('#loginOpen');
const formPopup = document.querySelector('#loginForm');
const loginClose = document.querySelector('#loginClose');
loginOpen.onclick = function (e) {
    formPopup.style.display = 'block';
    let elems = document.querySelectorAll('.alert-validate');
    [].forEach.call(elems, function (el) {
        el.classList.remove("alert-validate");
    });
}
loginClose.onclick = function (e) {
    formPopup.style.display = 'none';
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
// $(document).click(function (e) {
//     if (!loginBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
//         menu.slideUp();
//         menuBtn.removeClass('is-active');
//     };
// });

// Cart
// cartOpen.addEventListener("click", function () {
//     document.getElementById("cartProducts").style.visibilit = "visible";
//     document.getElementById("cartProducts").style.opacity = "1";
// });