
  const roles = ["BCA Student", "Creative Developer", "Tech Explorer"];
  let i = 0, j = 0, current = '', isDeleting = false;

  function typeWriter() {
    current = roles[i];
    document.getElementById("typewriter-text").textContent = current.slice(0, j);

    if (!isDeleting && j < current.length) {
      j++;
    } else if (isDeleting && j > 0) {
      j--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % roles.length;
    }

    setTimeout(typeWriter, isDeleting ? 40 : 120);
  }

  window.onload = typeWriter;
  
  // Lightbox functions
  function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = src;
  }
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox-img').src = '';
  }

  

    function animateSkills() {
      const section = document.querySelector('#skills');
      const bars = document.querySelectorAll('.bar-fill');
      const rect = section.getBoundingClientRect();
      const trigger = window.innerHeight - 100;

      if (rect.top < trigger) {
        bars.forEach(bar => {
          const target = bar.getAttribute('data-level');
          bar.style.width = target;
        });
        window.removeEventListener('scroll', animateSkills);
      }
    }
    window.addEventListener('scroll', animateSkills);

// Mobile menu toggle stays fixed while scrolling
 function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('active');
  }

  function closeMenu() {
    document.getElementById('mobileNav').classList.remove('active');
  }

  // Keeps toggle button fixed
  window.addEventListener('scroll', () => {
    const toggle = document.querySelector('.menu-toggle');
    toggle.style.position = 'fixed';
    toggle.style.top = '1rem';
  });
  
