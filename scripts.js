document.addEventListener('DOMContentLoaded', () => {
  // Burger menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    menuToggle.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        navMenu.classList.toggle('active');
      }
    });
  }
  // Highlight active link
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-menu li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Home page courses
  const coursesGrid = document.getElementById('coursesGrid');
  if (coursesGrid) {
    const courses = [
      {
        name: "Health Sciences",
        desc: "Medical support, community health, first aid skills.",
        icon: "https://img.icons8.com/color/96/000000/stethoscope.png"
      },
      {
        name: "Information Technology",
        desc: "Digital literacy, graphic design, web development, computer repair.",
        icon: "https://img.icons8.com/color/96/000000/laptop-coding.png"
      },
      {
        name: "Technical Trades",
        desc: "Fashion, hairdressing, electronics, electrical work.",
        icon: "https://img.icons8.com/color/96/000000/toolbox.png"
      }
    ];
    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${course.icon}" alt="${course.name}" />
        <h3>${course.name}</h3>
        <p>${course.desc}</p>
        <button class="btn-primary apply-btn">Apply</button>
      `;
      coursesGrid.appendChild(card);
    });
    document.querySelectorAll('.apply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showApplyModal();
        blinkHomeModal();
      });
    });
  }
  const applyNowBtn = document.getElementById('applyNowBtn');
  if (applyNowBtn) {
    applyNowBtn.addEventListener('click', () => {
      showApplyModal();
      blinkHomeModal();
    });
  }
  function showApplyModal() {
    const applyModal = document.getElementById('applyModal');
    applyModal.style.display = 'flex';
    setTimeout(() => {
      applyModal.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 100);
  }
  function blinkHomeModal() {
    const homeModalContent = document.getElementById('homeModalContent');
    if (homeModalContent) {
      homeModalContent.classList.remove('blink-modal');
      void homeModalContent.offsetWidth; // trigger reflow for restart
      homeModalContent.classList.add('blink-modal');
    }
  }
  const closeModal = document.getElementById('closeModal');
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      document.getElementById('applyModal').style.display = 'none';
    });
  }
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => {
      if (event.target === m) m.style.display = 'none';
    });
  };

  // Contact page modal logic
  const contactModalBtn = document.getElementById('contactModalBtn');
  if (contactModalBtn) {
    contactModalBtn.addEventListener('click', () => {
      document.getElementById('contactModal').style.display = 'flex';
      setTimeout(() => {
        document.getElementById('contactModal').scrollIntoView({behavior: 'smooth', block: 'center'});
      }, 100);
    });
  }
  const closeContactModal = document.getElementById('closeContactModal');
  if (closeContactModal) {
    closeContactModal.addEventListener('click', () => {
      document.getElementById('contactModal').style.display = 'none';
    });
  }
  // Contact form feedback
  const contactForm = document.getElementById('contactForm');
  const contactFormSuccess = document.getElementById('contactFormSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      contactFormSuccess.style.display = 'flex';
    });
  }
});
