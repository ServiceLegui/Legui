document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('presupuestador-avanzado');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
  
    function obtenerTextoSeleccionado(select) {
      return select.options[select.selectedIndex]?.text || '';
    }
  
    if (btnWhatsapp && form) {
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
  
        const mensaje = `¡Hola! Quiero solicitar un presupuesto con los siguientes datos:
  
  *Frigorías:* ${obtenerTextoSeleccionado(form.frigorias)}
  *Piso:* ${obtenerTextoSeleccionado(form.piso)}
  *Caño adicional:* ${obtenerTextoSeleccionado(form.canaleta)}
  *Unidad Exterior:* ${obtenerTextoSeleccionado(form.soporte)}
  *Unidad Interior:* ${obtenerTextoSeleccionado(form.taparollos)}
  *Ubicación:* ${obtenerTextoSeleccionado(form.zona)}`;
  
        const url = `https://wa.me/5491167204171?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
      });
    }
  
    // Menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list") || document.querySelector("#navMenu");
  
    if (menuToggle && navList) {
      navList.classList.remove("show"); // Asegura que esté cerrado al cargar
  
      menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
        menuToggle.classList.toggle("active"); // activa/desactiva animación
      });
    }

    // Scroll suave
    const scrollToSection = (id, extraOffset = 50) => {
      const target = document.getElementById(id);
      if (!target) return;
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - extraOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };
  
    document.querySelector('a[href="#servicios"]')?.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection("servicios", 50);
    });
  
    document.querySelector('a[href="#sobre-nosotros"]')?.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection("sobre-nosotros", 50);
    });
  
    document.getElementById("scrollBtn")?.addEventListener("click", e => {
      e.preventDefault();
      scrollToSection("sobre-nosotros", 50);
    });
  
    // IntersectionObserver animaciones
    const cuadroCentral = document.querySelector('.cuadro-central');
    if (cuadroCentral) {
      const observerCentral = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerCentral.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      observerCentral.observe(cuadroCentral);
    }
  
    const cuadros = document.querySelectorAll('.cuadro');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    cuadros.forEach(cuadro => observer.observe(cuadro));
  });