// Scroll suave ao clicar no botão
function scrollToSection() {
  const nextSection = document.querySelector('section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Revelar seções com animação quando aparecem na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Parallax background extra suave
window.addEventListener('scroll', function () {
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
});
