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
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604090/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.43_4_lzbmxj.jpg', label: 'Installation1' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604096/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.44_2_kmjypl.jpg', label: 'Installation2' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604090/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.44_uzwsot.jpg', label: 'Installation3' },

    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604101/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.40_3_pkyuu2.jpg', label: 'Splashscreen' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604123/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.43_vwq9fy.jpg', label: 'Accueil' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604113/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.42_q3y2me.jpg', label: 'Live' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604116/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.42_2_hr5lce.jpg', label: 'Catégories' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604114/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.42_1_ii9yg9.jpg', label: 'Détail contenu' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604097/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.40_1_vpih47.jpg', label: 'Profil' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604119/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.42_3_jtirft.jpg', label: 'Recherche' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604108/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.41_3_jhum08.jpg', label: 'Onboarding' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604109/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.41_4_uuwqu4.jpg', label: 'Connexion' },
    { url: 'https://res.cloudinary.com/dhrrk7vsd/image/upload/v1771604102/hostonewstv_web_assets/1_assets_public/WhatsApp_Image_2026-02-20_at_16.12.41_ureuzb.jpg', label: 'Inscription' },
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

  /* ==================== FOOTER SCREENS ==================== */
  const footerGrid = document.getElementById('footer-screens-grid');
  screensData.forEach((item, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'fs-thumb' + (item.url ? '' : ' ph-thumb');
    if (item.url) {
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.label;
      thumb.appendChild(img);
    } else {
      const sp = document.createElement('span');
      sp.textContent = item.label;
      thumb.appendChild(sp);
    }
    footerGrid.appendChild(thumb);
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
const themeIcon   = document.getElementById('theme-icon');
const themeLabel  = document.getElementById('theme-label');
const savedTheme  = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeIcon.textContent  = '☀️';
  themeLabel.textContent = 'Clair';
}

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeIcon.textContent  = isDark ? '☀️' : '🌙';
  themeLabel.textContent = isDark ? 'Clair' : 'Sombre';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});