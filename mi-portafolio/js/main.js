
//animaacion de las cards//
document.addEventListener("DOMContentLoaded", function() { //Espera a que todo el HTML esté cargado antes de ejecutar el código JavaScript. Esto evita errores si los elementos aún no existen.
  const cards = document.querySelectorAll('.card-proyecto');//Selecciona todas las tarjetas que tienen la clase . Esto crea una lista de elementos que serán observados.

  const observerOptions = {
    root: null, // Usar el viewport como raíz
    rootMargin: '0px',
    threshold: 0.5 // 10% de la tarjeta visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Tarjeta visible:', entry.target); // ✅ Validación en consola
        entry.target.classList.add('visible'); // Agregar clase visible
        observer.unobserve(entry.target); // Dejar de observar la tarjeta
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card); // Observar cada tarjeta
  });
});


//Animacion Menu hamburguesa//
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});