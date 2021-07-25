

// Burger btn
let btn = document.querySelector('#burgerMenuBtnItem');
        btn.addEventListener('click', function () {
            document.documentElement.classList.toggle('menu-open');
        });