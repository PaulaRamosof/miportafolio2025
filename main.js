// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Animación de las tarjetas con IntersectionObserver
  const cards = document.querySelectorAll('.card-proyecto');

  if (cards.length > 0) {
    const observerOptions = {
      root: null, // Usa el viewport como raíz
      rootMargin: '0px',
      threshold: 0.5 // 50% visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Tarjeta visible:', entry.target);
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // Deja de observar para optimizar
        }
      });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
  } else {
    console.warn('⚠️ No se encontraron tarjetas con la clase .card-proyecto');
  }

  // 🔹 Comportamiento personalizado del menú hamburguesa (solo si no usas Bootstrap)
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.warn('⚠️ No se encontró el botón #menu-toggle o el contenedor #nav-links');
  }

  // 🔹 Eventos opcionales para Bootstrap (si usas navbar con collapse)
  const navbar = document.getElementById('navbarNav');
  if (navbar) {
    navbar.addEventListener('show.bs.collapse', () => {
      console.log('Menú desplegado');
    });

    navbar.addEventListener('hide.bs.collapse', () => {
      console.log('Menú oculto');
    });
  }
});