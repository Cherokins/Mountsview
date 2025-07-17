document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
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
  const navLinks = document.querySelectorAll('.nav-menu li a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Homepage courses
  const courses = [
    {
      name: "Health Sciences",
      img: "https://img.icons8.com/color/96/000000/medical-doctor.png",
      desc: "Medical support, community health, first aid skills.",
      list: ["Community Health", "First Aid", "Medical Support", "Nutrition"]
    },
    {
      name: "Information Technology",
      img: "https://img.icons8.com/fluency/96/000000/artificial-intelligence.png",
      desc: "Digital literacy, graphic design, web development, computer repair.",
      list: ["Digital Literacy", "Graphic Design", "Web Development", "Computer Repair"]
    },
    {
      name: "Technical Trades",
      img: "https://img.icons8.com/color/96/000000/toolbox.png",
      desc: "Fashion, hairdressing, electronics, electrical work.",
      list: ["Fashion & Design", "Hairdressing", "Electronics", "Electrical Work"]
    }
  ];
  // For homepage
  const coursesGrid = document.getElementById('coursesGrid');
  if (coursesGrid) {
    courses.forEach((course, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${course.img}" alt="${course.name}">
        <h3>${course.name}</h3>
        <p>${course.desc}</p>
        <button class="btn-primary apply-btn" data-category="${course.name}">Apply</button>
      `;
      coursesGrid.appendChild(card);
    });
    document.querySelectorAll('.apply-btn').forEach(btn => {
      btn.addEventListener('click', showApplyModalUpclose);
    });
  }
  // Academics page
  const academicsGrid = document.getElementById('academicsGrid');
  const coursesDisplay = document.getElementById('coursesDisplay');
  if (academicsGrid && coursesDisplay) {
    courses.forEach((course, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${course.img}" alt="${course.name}">
        <h3>${course.name}</h3>
        <p>${course.desc}</p>
      `;
      card.addEventListener('click', () => {
        // Blink effect
        card.classList.add('card-blink');
        setTimeout(() => card.classList.remove('card-blink'), 600);
        // Show course list with apply
        coursesDisplay.innerHTML = `
          <div class="course-list-popup">
            <h4>${course.name} Courses</h4>
            <ul>
              ${course.list.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button class="btn-primary apply-btn" data-category="${course.name}">Apply</button>
          </div>
        `;
        // Scroll to popup
        coursesDisplay.scrollIntoView({behavior: "smooth", block: "center"});
        // Add apply modal trigger
        document.querySelector('.course-list-popup .apply-btn').addEventListener('click', showApplyModalUpclose);
      });
      academicsGrid.appendChild(card);
    });
  }

  // Modal logic
  const applyModal = document.getElementById('applyModal');
  const closeModal = document.getElementById('closeModal');
  function showApplyModalUpclose() {
    applyModal.style.display = 'flex';
    applyModal.querySelector('.modal-content').style.marginTop = "0";
    setTimeout(() => {
      applyModal.querySelector('.modal-content').scrollIntoView({behavior: "smooth", block: "center"});
    }, 50);
  }
  // Hero Apply button
  const applyNowBtn = document.getElementById('applyNowBtn');
  if (applyNowBtn) {
    applyNowBtn.addEventListener('click', showApplyModalUpclose);
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

  // Contact form basic validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
