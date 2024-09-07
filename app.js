// Sélection des éléments du DOM
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".haut .nav");
const navLinks = document.querySelectorAll(".haut .nav a");

// Fonction pour ouvrir/fermer le menu hamburger
function toggleMenu() {
  nav.classList.toggle('mobile');
  document.body.classList.toggle('no-scroll');
}

// Ajouter l'événement de clic au bouton hamburger
hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleMenu();
});

// Ajouter l'événement de clic à chaque lien du menu pour fermer le menu
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('mobile')) {
      toggleMenu();
    }
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);
  
  if (nav.classList.contains('mobile') && !isClickInsideNav && !isClickOnHamburger) {
    toggleMenu();
  }
});
// Sélectionner le logo
const logo = document.querySelector(".haut .logo");

// Ajouter l'événement de clic au logo
logo.addEventListener('click', () => {
  // Faire défiler la page vers le haut en douceur
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});