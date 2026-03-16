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
