// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    menuBtn.innerHTML = navbar.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Your existing JavaScript remains the same
// Adding AI brand hover effect
document.querySelectorAll('.ai-brand').forEach(brand => {
    brand.addEventListener('click', function (e) {
        if (e.target.tagName !== 'IMG') return;
        this.click();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const certificationCards = document.querySelectorAll('.certification-card');

    certificationCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            lightbox.style.display = 'block';
            lightboxImg.src = imgSrc;
        });
    });

    function closeModal() {
        lightbox.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeModal();
        }
    });
});

function openWithConfirm(url) {
    if (confirm("Do you want to open this AI platform's official website?")) {
        window.open(url, '_blank');
    }
}