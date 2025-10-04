
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.add('active');
    mobileThemeToggle.classList.add('active');
    updateThemeIcons(true);
}

function updateThemeIcons(isLight) {
    const icon = isLight ? 'fa-sun' : 'fa-moon';
    const color = isLight ? 'text-yellow-500' : 'text-white';
    document.querySelectorAll('.theme-toggle-slider i').forEach(el => {
        el.className = `fas ${icon} text-xs ${color}`;
    });
}

function toggleTheme() {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    themeToggle.classList.toggle('active', isLight);
    mobileThemeToggle.classList.toggle('active', isLight);
    updateThemeIcons(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);

// Navbar Scroll Effect
// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating');

    parallaxElements.forEach(el => {
        // Cek apakah elemen bukan bagian dari mobile menu
        if (!el.closest('#mobile-menu')) {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-gradient-to-r', 'from-purple-500', 'to-blue-500');
        });

        // Add active class to clicked button
        button.classList.add('active', 'bg-gradient-to-r', 'from-purple-500', 'to-blue-500');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show target content
        document.getElementById(targetTab).classList.remove('hidden');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple form validation and success message
    const formData = new FormData(e.target);

    // Show success message
    alert('Thank you for your message! I will get back to you soon. 🚀');

    // Reset form
    e.target.reset();
});

// Add entrance animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('section .card-3d, section .glass').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating');

    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Set active tab on load
document.querySelector('.tab-btn[data-tab="projects"]').classList.add('bg-gradient-to-r', 'from-purple-500', 'to-blue-500');


// Certificate Modal
const certificateModal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const certificateCards = document.querySelectorAll('.certificate-card');

// Open modal when certificate card is clicked
certificateCards.forEach(card => {
    card.addEventListener('click', () => {
        const imageSrc = card.getAttribute('data-image');
        modalImage.src = imageSrc;
        certificateModal.classList.remove('hidden');
        certificateModal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    certificateModal.classList.add('hidden');
    certificateModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside image
certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) {
        certificateModal.classList.add('hidden');
        certificateModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !certificateModal.classList.contains('hidden')) {
        certificateModal.classList.add('hidden');
        certificateModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
});