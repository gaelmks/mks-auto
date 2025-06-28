// rendre l'entete transparent
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});

// menu burger
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Ajout classe .section dynamiquement pour l'animation
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("section");
    });

    // Animation douce au scroll
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});

// pour ajouter au panier de reservation
function reserver(nom, image) {
    const voitures = JSON.parse(localStorage.getItem("voituresReservees")) || [];

    voitures.push({ nom, image });
    localStorage.setItem("voituresReservees", JSON.stringify(voitures));

    window.location.href = "reservation.html";
}
