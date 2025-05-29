// ======= MENU FIXO E SCROLL ATIVO =======
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('li');
const sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', () => {
  // Muda background do menu quando scrollar
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Ativa link conforme a seção visível
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // margem pro menu
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === current) {
      link.classList.add('active');
    }
  });
});

// Clique no menu rola pra seção suave
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.dataset.section);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ======= MODAL =======
const openModalBtn = document.getElementById('openModal');
const modalBg = document.getElementById('modalBg');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  modalBg.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modalBg.classList.remove('active');
});

modalBg.addEventListener('click', (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove('active');
  }
});

// ======= MAPA INTERATIVO =======
const map = L.map('map').setView([0, 20], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 6,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Pontos históricos e rota (exemplo simples)
const pontos = [
  { coords: [-15.7942, -47.8822], nome: 'Brasília - Brasil' },
  { coords: [-1.2921, 36.8219], nome: 'Nairobi - África Oriental' },
  { coords: [-4.4419, 15.2663], nome: 'Kinshasa - África Central' },
  { coords: [-33.9249, 18.4241], nome: 'Cidade do Cabo - África do Sul' },
];

pontos.forEach(ponto => {
  L.marker(ponto.coords).addTo(map).bindPopup(ponto.nome);
});

// Rota simplificada tráfico negreiro (linha)
const rotaCoords = [
  [-4.4419, 15.2663], // Kinshasa
  [-15.7942, -47.8822], // Brasília
];

const rotaLinha = L.polyline(rotaCoords, { color: '#e63946', weight: 4, dashArray: '8' }).addTo(map);

// Zoom para a rota
map.fitBounds(rotaLinha.getBounds());
