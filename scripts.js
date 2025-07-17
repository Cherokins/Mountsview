// Burger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', () => {
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
  // Highlight active link based on URL
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-menu li a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Dynamic courses grid
  const courses = [
    {
      name: "Information Technology",
      img: "https://img.icons8.com/color/96/000000/laptop-coding.png",
      desc: "Digital literacy, graphic design, web development, computer repair."
    },
    {
      name: "Technical Trades",
      img: "https://img.icons8.com/color/96/000000/toolbox.png",
      desc: "Fashion, hairdressing, electronics, electrical work."
    },
    {
      name: "Health Sciences",
      img: "https://img.icons8.com/color/96/000000/stethoscope.png",
      desc: "Medical support, community health, first aid skills."
    }
  ];
  const coursesGrid = document.getElementById('coursesGrid');
  if (coursesGrid) {
    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${course.img}" alt="${course.name}">
        <h3>${course.name}</h3>
        <p>${course.desc}</p>
        <button class="btn-primary apply-btn">Apply</button>
      `;
      coursesGrid.appendChild(card);
    });
    // Add click event for each Apply button
    document.querySelectorAll('.apply-btn').forEach(btn => {
      btn.addEventListener('click', showApplyModal);
    });
  }

  // Hero Apply button
  const applyNowBtn = document.getElementById('applyNowBtn');
  if (applyNowBtn) {
    applyNowBtn.addEventListener('click', showApplyModal);
  }

  // Modal logic
  const applyModal = document.getElementById('applyModal');
  const closeModal = document.getElementById('closeModal');
  function showApplyModal() {
    applyModal.style.display = 'flex';
  }
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      applyModal.style.display = 'none';
    });
  }
  window.onclick = function(event) {
    if (event.target === applyModal) {
      applyModal.style.display = 'none';
    }
  };
});
