// Typing Effect
const roles = ["Mechatronics Engineer", "Embedded Developer", "Sports Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');

function type() {
  if (charIndex < roles[roleIndex].length) {
    typewriterElement.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  }
}

// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
  type();
  
  const exploreButtons = document.querySelectorAll('.explore-button');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-modal');

  // Open modal
  exploreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const modalId = button.dataset.modal;
      document.getElementById(modalId).style.display = 'flex';
    });
  });

  // Close modal
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.modal').style.display = 'none';
    });
  });

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => modal.style.display = 'none');
    }
  });

  // Mobile tap handling
  document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        container.classList.toggle('active');
      }
    });
  });
});