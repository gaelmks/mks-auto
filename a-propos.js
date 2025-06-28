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

// Animation douce au scroll pour chaque section
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".apropos-section h2, .apropos-section p, .apropos-section ol");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});


