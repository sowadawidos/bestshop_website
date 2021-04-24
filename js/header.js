const header = document.querySelector(".header");
window.addEventListener("scroll", e => {
    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const btn = document.querySelector(".page-nav-toogle");
const nav = document.querySelector(".header__nav-list");
const hnav = document.querySelector(".header__nav");

btn.onclick = function () {
    nav.classList.toggle("show");
    hnav.classList.toggle("show");
};