// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Services Container Scrolling
const servicesContainer = document.getElementById('services-container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    servicesContainer.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    servicesContainer.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});

// Service Card Click Handler
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        serviceCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        card.classList.add('active');
        
        // Update card styling
        updateCardStyling(card, true);
        serviceCards.forEach((c, i) => {
            if (i !== index) {
                updateCardStyling(c, false);
            }
        });
    });

    // Hover effect
    card.addEventListener('mouseenter', () => {
        serviceCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        updateCardStyling(card, true);
        serviceCards.forEach((c, i) => {
            if (i !== index) {
                updateCardStyling(c, false);
            }
        });
    });
});

// Update card styling based on active state
function updateCardStyling(card, isActive) {
    if (isActive) {
        // Active card styling
        card.style.background = 'linear-gradient(to bottom right, #16a34a, #15803d)';
        card.style.color = 'white';
        card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        card.style.borderColor = '#4ade80';
        
        // Update icon
        const icon = card.querySelector('.service-icon');
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        icon.style.transform = 'scale(1.1)';
        
        const svg = icon.querySelector('svg');
        svg.style.color = 'white';
        
        // Update text colors
        const title = card.querySelector('h3');
        title.style.color = 'white';
        
        const description = card.querySelector('p');
        description.style.color = 'rgba(255, 255, 255, 0.9)';
        
        const price = card.querySelector('.text-lg');
        price.style.color = 'white';
        
        // Update button
        const btn = card.querySelector('.service-btn');
        btn.style.backgroundColor = 'white';
        btn.style.color = '#16a34a';
        btn.style.borderColor = 'white';
    } else {
        // Inactive card styling
        card.style.background = 'white';
        card.style.color = '#111827';
        card.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        card.style.borderColor = '#e5e7eb';
        
        // Update icon
        const icon = card.querySelector('.service-icon');
        icon.style.backgroundColor = '#dcfce7';
        icon.style.transform = 'scale(1)';
        
        const svg = icon.querySelector('svg');
        svg.style.color = '#16a34a';
        
        // Update text colors
        const title = card.querySelector('h3');
        title.style.color = '#111827';
        
        const description = card.querySelector('p');
        description.style.color = '#4b5563';
        
        const price = card.querySelector('.text-lg');
        price.style.color = '#f97316';
        
        // Update button
        const btn = card.querySelector('.service-btn');
        btn.style.backgroundColor = '#16a34a';
        btn.style.color = 'white';
        btn.style.borderColor = '#16a34a';
    }
}

// Set first card as active by default
if (serviceCards.length > 0) {
    serviceCards[0].classList.add('active');
    updateCardStyling(serviceCards[0], true);
}

// Smooth scroll for anchor links
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

// Add scroll event listener for navbar shadow effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }
});

// Button click handlers
const bookingButtons = document.querySelectorAll('button');
bookingButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Only show alert for booking buttons
        if (this.textContent.includes('احجز') || this.textContent.includes('طلب')) {
            e.preventDefault();
            alert('شكراً لاهتمامك! سيتم التواصل معك قريباً.');
        }
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-slide-in-up, .animate-fade-in, .animate-scale-in').forEach(el => {
    observer.observe(el);
});

// Prevent default form submission
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        alert('شكراً! تم استقبال طلبك.');
    }
});

// Initialize
console.log('Clean Fresh Website Loaded Successfully! ✨');
