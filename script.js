// Scroll suave tá ativado no CSS com scroll-behavior

// Menu fixo com destaque do link ativo
const sections = document.querySelectorAll('section, #home');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 110;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Fade-in das seções ao scroll
const fadeSections = document.querySelectorAll('section, #home');

function checkFade() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Carrossel simples
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;
  carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  showSlide(index - 1);
});
nextBtn.addEventListener('click', () => {
  showSlide(index + 1);
});

// Começa no slide 0
showSlide(0);
