//rendre l'entete transparent
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});
//Mettre le menu burger
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

