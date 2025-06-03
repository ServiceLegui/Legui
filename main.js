document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('presupuestador-avanzado');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
  
    function obtenerTextoSeleccionado(select) {
      return select.options[select.selectedIndex]?.text || '';
    }
  
    btnWhatsapp.addEventListener('click', () => {
      const frigorias = parseInt(form.frigorias.value) || 0;
      const piso = parseInt(form.piso.value) || 0;
      const soporte = parseInt(form.soporte.value) || 0;
      const canaleta = parseInt(form.canaleta.value) || 0;
      const zona = parseInt(form.zona.value) || 0;
      const taparollos = parseInt(form.taparollos.value) || 0;
  
      if (!form.frigorias.value || !form.piso.value) {
        alert('Por favor completá todos los datos');
        return;
      }
  
      const total = frigorias + piso + soporte + canaleta + zona + taparollos;
      const tiempo = (1 + piso / 2000).toFixed(1);
  
      const mensaje =
`¡Hola! Quiero solicitar un presupuesto con los siguientes datos:
      
*Frigorías:* ${obtenerTextoSeleccionado(form.frigorias)}
*Piso:* ${obtenerTextoSeleccionado(form.piso)}
*Caño adicional:* ${obtenerTextoSeleccionado(form.canaleta)}
*Unidad Exterior:* ${obtenerTextoSeleccionado(form.soporte)}
*Unidad Interior:* ${obtenerTextoSeleccionado(form.taparollos)}
*Ubicación:* ${obtenerTextoSeleccionado(form.zona)}`;
  
      const url = `https://wa.me/5491167204171?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    });
  });
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

let sliderIndex = 0;

function moverSlider(direccion) {
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;
  sliderIndex = (sliderIndex + direccion + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
}
  
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

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});