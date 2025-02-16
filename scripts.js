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
    
    const exploreBtns = document.querySelectorAll('.explore-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');

    exploreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => modal.style.display = 'none');
        }
    });
});