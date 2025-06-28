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
    const fadeElements = document.querySelectorAll('.fade-in-up');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });
const images = [
        'toyota-Highlander.JPG',
        'sprinter-accueil.JPG',
        'mansory-rolls-cullinan.JPG',
        'camion-accueil.JPG'
    ];

    let currentIndex = 0;
    const slideshowDiv = document.querySelector('.background-slideshow');

    function changeBackground() {
        slideshowDiv.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Démarre le diaporama
    changeBackground();
    setInterval(changeBackground, 6000);
});









