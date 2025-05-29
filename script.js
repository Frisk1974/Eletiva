// Revealing elements on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Parallax fundo (extra opcional se quiser mais dinâmica)
window.addEventListener('scroll', function () {
  const hero = document.querySelector('.hero');
  let scrollPos = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});
