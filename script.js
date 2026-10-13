  /* ==================== PROTECTION AVANCÉE ==================== */
  document.addEventListener('dragstart', e => e.preventDefault());

  /* ==================== NAV SCROLL ==================== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ==================== SCROLL REVEAL ==================== */
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => revealObs.observe(el));

  /* ==================== MARQUEE SCREENS ==================== */
  // Mettez vos URLs d'écrans ici.
  // Format : { url: 'https://...', label: 'Accueil' }
  // Laissez url vide pour un placeholder coloré.
  const screensData = [
    { url: '', label: 'Splashscreen' },
    { url: '', label: 'Connexion' },
    { url: '', label: 'Accueil' },
    { url: '', label: 'Rendez-vous' },
    { url: '', label: 'Choix du médecin' },
    { url: '', label: 'Téléconsultation' },
    { url: '', label: 'Résultats' },
    { url: '', label: 'Dossier médical' },
    { url: '', label: 'Rappels' },
    { url: '', label: 'Urgences' },
    { url: '', label: 'Profil' },
  ];

  const palettes = [
    ['#e8f5f0','#128A5F'],
    ['#e8f0fa','#1a237e'],
    ['#fdeee0','#e65100'],
    ['#f3e8fa','#7b1fa2'],
    ['#e8faf0','#0A5C3E'],
    ['#fafae8','#5d4037'],
    ['#e8f5fa','#0277bd'],
    ['#fae8e8','#c62828'],
  ];

  function buildCard(item, index) {
    const card = document.createElement('div');
    card.className = 'screen-card' + (item.url ? '' : ' placeholder');
    if (item.url) {
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.label;
      card.appendChild(img);
    } else {
      const pal = palettes[index % palettes.length];
      card.style.background = pal[0];
      card.style.borderColor = pal[1] + '40';
      const num = document.createElement('div');
      num.className = 'ph-num';
      num.style.color = pal[1];
      num.textContent = String(index + 1).padStart(2,'0');
      const lbl = document.createElement('div');
      lbl.className = 'ph-label';
      lbl.textContent = item.label;
      card.appendChild(num);
      card.appendChild(lbl);
    }
    return card;
  }

  function populateTrack(trackEl, items, startIndex) {
    // On double pour l'effet infini
    [...items, ...items].forEach((item, i) => {
      trackEl.appendChild(buildCard(item, (startIndex + i) % items.length));
    });
  }

  const trackLtr = document.getElementById('track-ltr');
  const trackRtl = document.getElementById('track-rtl');

  populateTrack(trackLtr, screensData, 0);
  populateTrack(trackRtl, screensData, 4); // décalage pour varier

  /* Pause au hover */
  document.querySelectorAll('.marquee-track').forEach(t => {
    t.addEventListener('mouseenter', () => t.style.animationPlayState = 'paused');
    t.addEventListener('mouseleave', () => t.style.animationPlayState = 'running');
  });

  /* ==================== BOUTON TÉLÉCHARGEMENT ==================== */
  document.querySelector('.btn-download').addEventListener('click', function(e) {
    // Vérification fichier avant dl
    const link = this.getAttribute('href');
    if (!link) { e.preventDefault(); alert('Fichier APK non disponible.'); }
  });

    document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (
      e.key === 'u' || e.key === 'U' ||
      e.key === 's' || e.key === 'S' ||
      e.key === 'i' || e.key === 'I' ||
      e.key === 'j' || e.key === 'J' ||
      e.key === 'c' || e.key === 'C'
    )) e.preventDefault();
    if (e.key === 'F12') e.preventDefault();
  });
  document.addEventListener('contextmenu', e => e.preventDefault());

/* ==================== TOGGLE MODE SOMBRE ==================== */
const toggleBtn   = document.getElementById('theme-toggle');
const themeLabel  = document.getElementById('theme-label');
const savedTheme  = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeLabel.textContent = 'Clair';
}

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeLabel.textContent = isDark ? 'Clair' : 'Sombre';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});