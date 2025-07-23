
//Typewriter function
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
//Theme label
 function toggleText() {
      const toggle = document.getElementById("themeToggle");
      const label = document.getElementById('ld');
      if (toggle.checked) {
        label.innerHTML = "Night";
        label.style.color="White"
      }else {
        label.innerHTML = "Day";
        label.style.color="black";
      }
    }
//Resume 
function openResume() {
  document.getElementById('resumeModal').style.display = 'flex';
}
function closeResume() {
  document.getElementById('resumeModal').style.display = 'none';
}

// Lightbox functions
function openLightbox(src) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = src;
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lightbox-img').src = '';
}

  
//Skill bar loading function
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

// Fixed Mobile menu toggle while scrolling
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
  
//SSLC Markscard PDF Iframe
function OsslcPDF(){
  document.getElementById('sslcmsheet').style.display = 'flex';
}
function CsslcPDF() {
  document.getElementById('sslcmsheet').style.display = 'none';
}

//PUC Markscard PDF Iframe
function OpucPDF(){
  document.getElementById('pucmsheet').style.display = 'flex';
}
function CpucPDF() {
  document.getElementById('pucmsheet').style.display = 'none';
}

//BCA Markscard PDF Iframe
function ObcaPDF(){
  document.getElementById('bcamsheet').style.display = 'flex';
}
function CbcaPDF() {
  document.getElementById('bcamsheet').style.display = 'none';
}

//Frontend developer certificate pdf iframe
function OfrontendPDF(){
  document.getElementById('frontendcert').style.display = 'flex';
}
function CfrontendPDF() {
  document.getElementById('frontendcert').style.display = 'none';
}
//Iot certificate pdf iframe
function OiotPDF(){
  document.getElementById('iotcert').style.display = 'flex';
}
function CiotPDF() {
  document.getElementById('iotcert').style.display = 'none';
}