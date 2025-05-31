// Scroll suave con offset ajustable
function scrollToSection(id, extraOffset = 50) {  // por defecto 50 para que quede un poco más arriba
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = document.querySelector("header").offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - extraOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Listener para enlace "Servicios" con offset 50
document.querySelector('a[href="#servicios"]').addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("servicios", 50);
});

// Listener para enlace "Sobre Nosotros" con offset 50
document.querySelector('a[href="#sobre-nosotros"]').addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("sobre-nosotros", 50);
});

// Listener para botón central "Sobre Nosotros"
document.getElementById("scrollBtn").addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("sobre-nosotros", 50);
});

// Animación cuadro-central con IntersectionObserver
const cuadroCentral = document.querySelector('.cuadro-central');

const observerCentral = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerCentral.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

observerCentral.observe(cuadroCentral);

// Animación cuadros destacados con IntersectionObserver
const cuadros = document.querySelectorAll('.cuadro');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

cuadros.forEach(cuadro => observer.observe(cuadro));
