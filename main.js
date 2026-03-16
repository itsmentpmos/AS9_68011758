// ===========================
//   Singularity - main.js
// ===========================

// ===== MOVIE DATA =====
const movies = [
  {
    id: 1,
    title: "Breaking Bad",
    titleEn: "Breaking Bad",
    genre: "Crime / Drama",
    rating: "9.5",
    year: "2008–2013",
    director: "Vince Gilligan",
    cast: "Bryan Cranston, Aaron Paul, Anna Gunn, Dean Norris",
    synopsis: "เคมีครูผู้ป่วยมะเร็งระยะสุดท้ายตัดสินใจทำยาเสพติดเพื่อทิ้งมรดกให้ครอบครัว แต่เส้นทางนั้นพาเขาลงสู่ห้วงเหวมืดของโลกอาชญากรรมที่ไม่มีวันหวนกลับ ซีรีส์แห่งยุคที่ได้รับการยอมรับว่าดีที่สุดตลอดกาล",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    banner: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
  },
  {
    id: 2,
    title: "Game of Thrones",
    titleEn: "Game of Thrones",
    genre: "Fantasy / Drama",
    rating: "9.2",
    year: "2011–2019",
    director: "David Benioff, D.B. Weiss",
    cast: "Emilia Clarke, Kit Harington, Peter Dinklage, Lena Headey",
    synopsis: "มหากาพย์การต่อสู้แย่งชิงบัลลังก์เหล็กแห่งเวสเตอรอส ในโลกแฟนตาซีที่เต็มไปด้วยการทรยศ สงคราม มังกร และเวทมนตร์มืด ที่ซึ่งชัยชนะและความตายอาจมาในวันเดียวกัน",
    poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX800_.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX800_.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    titleEn: "Interstellar",
    genre: "Sci-Fi / Adventure",
    rating: "8.7",
    year: "2014",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
    synopsis: "นักบินอวกาศออกเดินทางผ่านรูหนอนในจักรวาลเพื่อค้นหาโลกใหม่รองรับมนุษยชาติ บนเส้นทางที่ความรักของพ่อและลูกสาวต้องต้านทานแรงโน้มถ่วงของเวลาและห้วงอวกาศอันไม่สิ้นสุด",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX800_.jpg"
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    titleEn: "The Lord of the Rings",
    genre: "Fantasy / Adventure",
    rating: "9.0",
    year: "2001–2003",
    director: "Peter Jackson",
    cast: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
    synopsis: "ฮอบบิทหนุ่มนามว่า Frodo ได้รับมอบหมายให้นำแหวนแห่งอำนาจสูงสุดไปทำลายในภูเขาไฟ Mordor พร้อมกับเหล่าสหายที่ต้องต่อสู้กับกองทัพมืดของ Sauron ในการผจญภัยครั้งสำคัญที่สุดของโลก Middle-earth",
    poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX800_.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX800_.jpg"
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    titleEn: "The Shawshank Redemption",
    genre: "Drama",
    rating: "9.3",
    year: "1994",
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    synopsis: "นายธนาคารผู้ถูกกล่าวหาว่าฆาตกรรมภรรยาต้องโทษจำคุกตลอดชีวิตใน Shawshank ในคุกที่โหดร้าย เขาค้นพบความหวังและมิตรภาพที่ยั่งยืน ภาพยนตร์ที่ได้รับการโหวตเป็นหนังดีที่สุดตลอดกาลจากคนทั่วโลก",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    banner: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 6,
    title: "The Last of Us",
    titleEn: "The Last of Us",
    genre: "Drama / Post-Apocalyptic",
    rating: "8.8",
    year: "2023–",
    director: "Craig Mazin, Neil Druckmann",
    cast: "Pedro Pascal, Bella Ramsey, Anna Torv, Gabriel Luna",
    synopsis: "ในโลกหลังการระบาดของเชื้อราที่เปลี่ยนมนุษย์เป็นสัตว์ประหลาด ชายผู้ผ่านโศกนาฏกรรมต้องพาเด็กสาวที่อาจเป็นความหวังสุดท้ายของมนุษยชาติข้ามประเทศอเมริกาที่แตกสลาย",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    banner: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
  }
];

// ===== RENDER MOVIE CARDS =====
function renderMovies() {
  const grid = document.getElementById('movieGrid');
  if (!grid) return;

  grid.innerHTML = movies.map(movie => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="movie-card" onclick="openModal(${movie.id})">
        <div class="movie-poster">
          <span class="movie-genre-tag">${movie.genre}</span>
          <span class="movie-rating">⭐ ${movie.rating}</span>
          <img src="${movie.poster}" alt="${movie.title}" loading="lazy"
               onerror="this.onerror=null; this.src='https://placehold.co/400x600/110d22/9b59b6?text=' + encodeURIComponent(movie.title)">
          <div class="movie-overlay">
            <small style="color:#ccc; font-size:0.8rem;">คลิกเพื่อดูรายละเอียด</small>
          </div>
        </div>
        <div class="movie-body">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">
            <i class="bi bi-calendar3"></i> ${movie.year} &nbsp;|&nbsp;
            <i class="bi bi-person"></i> ${movie.director}
          </div>
          <button class="btn-detail" onclick="event.stopPropagation(); openModal(${movie.id})">
            <i class="bi bi-play-circle me-2"></i>ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== MODAL =====
function openModal(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalPoster').src = movie.poster;
  document.getElementById('modalPoster').alt = movie.title;
  document.getElementById('modalDirector').textContent = movie.director;
  document.getElementById('modalCast').textContent = movie.cast;
  document.getElementById('modalSynopsis').textContent = movie.synopsis;
  document.getElementById('modalGenre').textContent = movie.genre + ' | ' + movie.year;

  const modal = new bootstrap.Modal(document.getElementById('movieModal'));
  modal.show();
}

// ===== CONTACT FORM =====
function handleContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const message = document.getElementById('inputMessage').value.trim();

    if (!name || !email || !message) {
      showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'warning');
      return;
    }

    // Simulate sending
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'กำลังส่ง...';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.textContent = 'ส่งข้อมูล';
      btn.disabled = false;
      // Close modal if open
      const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
      if (contactModal) contactModal.hide();
      showToast(`ขอบคุณ ${name}! เราได้รับข้อความของคุณแล้ว`, 'success');
    }, 1500);
  });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
  const toastEl = document.getElementById('liveToast');
  const toastMsg = document.getElementById('toastMessage');
  const toastHeader = toastEl.querySelector('.toast-header');

  toastMsg.textContent = message;
  toastHeader.style.background = type === 'success'
    ? 'rgba(229,9,20,0.15)'
    : 'rgba(255,193,7,0.15)';

  const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
  toast.show();
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Close mobile menu if open
        const navCollapse = document.getElementById('navbarNav');
        if (navCollapse && navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getInstance(navCollapse)?.hide();
        }
      }
    });
  });
}

// ===== ACTIVE NAV =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  handleContactForm();
  initNavbarScroll();
  initSmoothScroll();
  initActiveNav();
});

// ============================================
//  SINGULARITY — SPACE ANIMATION ENGINE
// ============================================

// ── 1. Canvas Starfield + Wormhole ──────────
function initSpaceCanvas() {
  const canvas = document.getElementById('spaceCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], wormholeActive = false, wormholeX = 0, wormholeY = 0, wormholeT = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Generate stars
  function mkStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        color: Math.random() > 0.85
          ? `rgba(212,160,23,`
          : Math.random() > 0.7
          ? `rgba(155,89,182,`
          : `rgba(255,255,255,`
      });
    }
  }
  mkStars(280);

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    frame++;

    // Draw stars
    stars.forEach(s => {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha >= 1)   { s.alpha = 1;   s.twinkleDir = -1; }
      if (s.alpha <= 0.1) { s.alpha = 0.1; s.twinkleDir = 1;  }
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + s.alpha + ')';
      ctx.fill();
    });

    // Wormhole ripple (triggered on card click)
    if (wormholeActive) {
      wormholeT += 0.06;
      for (let i = 0; i < 5; i++) {
        const radius = (wormholeT * 180 + i * 60) % 600;
        const alpha  = Math.max(0, 0.6 - radius / 500);
        ctx.beginPath();
        ctx.arc(wormholeX, wormholeY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0
          ? `rgba(212,160,23,${alpha})`
          : `rgba(155,89,182,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      if (wormholeT > 8) { wormholeActive = false; wormholeT = 0; }
    }

    requestAnimationFrame(draw);
  }
  draw();

  // Expose trigger
  window.triggerWormhole = function(x, y) {
    wormholeX = x; wormholeY = y;
    wormholeActive = true; wormholeT = 0;
  };
}

// ── 2. Custom Cursor Glow ───────────────────
function initCursor() {
  const glow  = document.getElementById('cursorGlow');
  const trail = document.getElementById('cursorTrail');
  if (!glow || !trail) return;

  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    glow.style.left = mx + 'px';
    glow.style.top  = my + 'px';
  });

  // Smooth trail lag
  function moveTrail() {
    tx += (mx - tx) * 0.14;
    ty += (my - ty) * 0.14;
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(moveTrail);
  }
  moveTrail();

  // Grow cursor on hover over interactive elements
  document.querySelectorAll('a, button, .movie-card, .about-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      glow.style.width  = '50px';
      glow.style.height = '50px';
      glow.style.opacity = '0.9';
    });
    el.addEventListener('mouseleave', () => {
      glow.style.width  = '20px';
      glow.style.height = '20px';
      glow.style.opacity = '0.7';
    });
  });
}

// ── 3. Scroll Reveal (IntersectionObserver) ─
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-stagger');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger number counter when stats row appears
        if (entry.target.classList.contains('stats-row') ||
            entry.target.querySelector('.stat-number')) {
          animateCounters(entry.target);
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => obs.observe(el));
}

// ── 4. Number Counter Animation ─────────────
function animateCounters(container) {
  const nums = container.querySelectorAll('.stat-number[data-target]');
  nums.forEach(el => {
    const target = +el.dataset.target;
    const dur    = 1800;
    const start  = performance.now();
    function tick(now) {
      const pct = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - pct, 3);
      el.textContent = Math.round(target * ease).toLocaleString();
      if (pct < 1) requestAnimationFrame(tick);
      else {
        el.textContent = target.toLocaleString();
        if (target === 99) el.textContent = '99%';
        if (target === 4)  el.textContent = '4K';
      }
    }
    requestAnimationFrame(tick);
  });
}

// ── 5. Warp Ripple on Card Click ────────────
function initCardClickEffects() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.movie-card');
    if (!card) return;

    // Canvas wormhole
    if (window.triggerWormhole) {
      window.triggerWormhole(e.clientX, e.clientY);
    }

    // DOM ripple overlay
    const ripple = document.createElement('div');
    ripple.className = 'warp-ripple';
    ripple.style.left   = e.clientX + 'px';
    ripple.style.top    = e.clientY + 'px';
    ripple.style.width  = '80px';
    ripple.style.height = '80px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 900);
  });
}

// ── 6. Shooting Stars (random intervals) ────
function initShootingStars() {
  function shoot() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.6);
    const angle  = 25 + Math.random() * 30; // degrees
    const dist   = 300 + Math.random() * 400;
    const dur    = 600 + Math.random() * 600;
    const rad    = angle * Math.PI / 180;
    star.style.left = startX + 'px';
    star.style.top  = startY + 'px';
    star.style.setProperty('--dx', (Math.cos(rad) * dist) + 'px');
    star.style.setProperty('--dy', (Math.sin(rad) * dist) + 'px');
    star.style.animationDuration = dur + 'ms';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), dur + 100);

    // Schedule next
    setTimeout(shoot, 2000 + Math.random() * 5000);
  }
  setTimeout(shoot, 1500);
}

// ── 7. Hero Parallax on scroll ──────────────
function initHeroParallax() {
  const hero    = document.querySelector('.hero-banner');
  const content = document.querySelector('.hero-content');
  const bh      = document.querySelector('.hero-blackhole');
  if (!hero || !content) return;

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (sy > window.innerHeight) return;
    const pct = sy / window.innerHeight;
    content.style.transform = `translateY(${sy * 0.3}px)`;
    content.style.opacity   = 1 - pct * 1.4;
    if (bh) bh.style.transform = `translateY(${sy * 0.15}px) scale(${1 + pct * 0.1})`;
  }, { passive: true });
}

// ── 8. Navbar glow on scroll ─────────────────
function initNavbarGlow() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) nav.classList.add('warp-speed');
    else nav.classList.remove('warp-speed');
  }, { passive: true });
}

// ── INIT ALL ANIMATIONS ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSpaceCanvas();
  initCursor();
  initScrollReveal();
  initCardClickEffects();
  initShootingStars();
  initHeroParallax();
  initNavbarGlow();
});
