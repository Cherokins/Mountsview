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

  // Dynamic courses grid (Home)
  const courses = [
    {
      name: "Health Sciences",
      img: "https://img.icons8.com/color/96/000000/stethoscope.png", // Stethoscope icon
      desc: "Medical support, community health, first aid skills."
    },
    {
      name: "Information Technology",
      img: "https://img.icons8.com/color/96/000000/laptop-coding.png", // Laptop coding icon
      desc: "Digital literacy, graphic design, web development, computer repair."
    },
    {
      name: "Technical Trades",
      img: "https://img.icons8.com/color/96/000000/toolbox.png",
      desc: "Fashion, hairdressing, electronics, electrical work."
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

  // Modal logic (global)
  const applyModal = document.getElementById('applyModal');
  const closeModal = document.getElementById('closeModal');
  function showApplyModal() {
    applyModal.style.display = 'flex';
    // Scroll modal into view and focus for accessibility
    setTimeout(() => {
      applyModal.scrollIntoView({behavior: 'smooth', block: 'center'});
      const firstLink = applyModal.querySelector('.apply-link');
      if (firstLink) firstLink.focus();
    }, 100);
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

  // Contact form basic validation (optional enhancement)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  // Academics page interactive categories
  const academicsGrid = document.getElementById('academicsGrid');
  const courseLists = document.getElementById('courseLists');
  if (academicsGrid) {
    const academicCategories = [
      {
        name: "Health Sciences",
        img: "https://img.icons8.com/color/96/000000/stethoscope.png", // Stethoscope icon
        desc: "Medical support, community health, first aid skills.",
        courses: [
          "Certificate in Community Health",
          "Diploma in Medical Support",
          "First Aid & Emergency Response"
        ]
      },
      {
        name: "Information Technology",
        img: "https://img.icons8.com/color/96/000000/laptop-coding.png", // Laptop coding icon
        desc: "Digital literacy, graphic design, web development, computer repair.",
        courses: [
          "Certificate in IT Fundamentals",
          "Graphic Design",
          "Computer Repair & Maintenance",
          "Web Development"
        ]
      },
      {
        name: "Technical Trades",
        img: "https://img.icons8.com/color/96/000000/toolbox.png",
        desc: "Fashion, hairdressing, electronics, electrical work.",
        courses: [
          "Fashion & Design",
          "Hairdressing",
          "Basic Electronics",
          "Electrical Installation"
        ]
      }
    ];
    academicCategories.forEach((cat, idx) => {
      const card = document.createElement('div');
      card.className = 'card academic-category';
      card.innerHTML = `
        <img src="${cat.img}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
      `;
      card.addEventListener('click', () => {
        // blinking effect
        card.classList.add('blink');
        setTimeout(() => card.classList.remove('blink'), 500);
        // Show course list for this category
        courseLists.innerHTML = `
          <div class="course-list-card">
            <h4>${cat.name} Courses</h4>
            <ul>
              ${cat.courses.map(c => `<li>${c}</li>`).join('')}
            </ul>
            <button class="btn-primary" id="applyCatBtn${idx}">Apply</button>
          </div>
        `;
        // Hook up modal for Apply in the course list
        const applyCatBtn = document.getElementById(`applyCatBtn${idx}`);
        if (applyCatBtn) applyCatBtn.onclick = showApplyModal;
        // Scroll course list into view for user
        setTimeout(() => {
          courseLists.scrollIntoView({behavior: 'smooth', block: 'center'});
        }, 200);
      });
      academicsGrid.appendChild(card);
    });
  }
});
