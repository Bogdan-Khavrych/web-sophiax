// Fix onload visible menu start
setTimeout(() => {
    document.getElementsByClassName('header__lang-menu-header')[0].style.display = 'block';
    document.getElementsByClassName('header__menu')[0].style.display = 'flex';
}, 300);
// Fix onload visible menu end

// Header menu logic start
document.addEventListener("click", function (event) {
    if (event.target.matches(".header__menu-top-lang") || !event.target.closest(".header__menu, .header__burger-btn")) {
        document.querySelector('.header__menu-top-lang').classList.remove("active");
        burgerClose();
    }
});

document.addEventListener("click", function (event) {
    if (event.target.matches(".header__lang-btn-wrap") || !event.target.closest(".header__lang-btn-wrap, .header__lang-menu-header")) {
        document.querySelector('.header__lang').classList.remove("active");
    }
});

document.querySelector('.header__lang-btn-wrap').addEventListener('click', function () {
    document.querySelector('.header__lang').classList.toggle("active");
})

document.addEventListener("click", function (event) {
    if (event.target.matches(".header__menu-top-lang-btn-wrap") || !event.target.closest(".header__menu-top-lang-btn-wrap, .header__menu-lang-menu")) {
        document.querySelector('.header__menu-top-lang').classList.remove("active");
    }
});

document.querySelector('.header__menu-top-lang-btn-wrap').addEventListener('click', function () {
    document.querySelector('.header__menu-top-lang').classList.toggle("active");
})

function burgerClose() {
    document.querySelector('.header__burger').classList.remove("active");
    document.querySelector('.header').classList.remove("burger-active");
    document.querySelector('.cover').classList.remove("active");
}

document.querySelector('.header__burger-btn').addEventListener('click', function () {
    burgerOpen();
})

function burgerOpen() {
    document.querySelector('.header__burger').classList.add("active");
    document.querySelector('.header').classList.add("burger-active");
    document.querySelector('.cover').classList.add("active");
}

document.querySelector('.header__burger-close').addEventListener('click', function () {
    burgerClose();
})
// Header menu logic end