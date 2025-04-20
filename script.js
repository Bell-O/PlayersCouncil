// Header scroll effect and mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Handle scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Change icon
            const menuIcon = menuToggle.querySelector('svg');
            if (menuIcon) {
                if (mobileMenu.classList.contains('active')) {
                    menuIcon.innerHTML = `
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    `;
                } else {
                    menuIcon.innerHTML = `
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    `;
                }
            }
        });
    }
    
    // Create particles
    createParticles();
});

// Create particles function
function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // Create stars
    createStars(particlesContainer);
    
    // Create glowing orbs
    createOrbs(particlesContainer);
}

// Create stars
function createStars(container) {
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random opacity and duration
        const opacity = Math.random() * 0.5 + 0.2;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        
        // Apply styles
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = '0';
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
        star.style.animationDelay = `${delay}s`;
        
        container.appendChild(star);
    }
}

// Create glowing orbs
function createOrbs(container) {
    const orbCount = 15;
    
    for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 100 + 50;
        
        // Random color (purples and blues)
        const hue = Math.random() * 60 + 220; // 220-280 range for purples and blues
        const color = `hsla(${hue}, 70%, 60%, 0.05)`;
        
        // Apply styles
        orb.style.position = 'absolute';
        orb.style.left = `${posX}%`;
        orb.style.top = `${posY}%`;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.borderRadius = '50%';
        orb.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
        orb.style.filter = 'blur(20px)';
        orb.style.zIndex = '-1';
        
        // Animation
        orb.style.animation = `floating ${Math.random() * 10 + 10}s ease-in-out infinite`;
        orb.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(orb);
    }
}

// Add keyframes for twinkle animation
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: var(--opacity, 0.7); transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});

// Loading Screen - แก้ไขส่วนนี้
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    // ทำให้แน่ใจว่า body ไม่ถูกซ่อน
    document.body.style.visibility = 'visible';
    
    // Hide loading screen after content is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            
            // Start animations after loading screen is hidden
            setTimeout(function() {
                initAnimations();
            }, 500);
        }, 2000); // Show loading screen for at least 2 seconds
    });
    
    // If content loads too quickly, still show loading for minimum time
    setTimeout(function() {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
            setTimeout(function() {
                initAnimations();
            }, 500);
        }
    }, 3000);
});

// Initialize animations
function initAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Trigger animations for elements in viewport
    triggerAnimations();
    
    // Continue to check for elements entering viewport during scroll
    window.addEventListener('scroll', function() {
        triggerAnimations();
    });
}

// Add animation classes to elements
function addAnimationClasses() {
    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(function(section, index) {
        section.classList.add('fade-in');
        section.style.transitionDelay = (index * 0.1) + 's';
    });
    
    // Add slide-in-left to left elements
    document.querySelectorAll('.info-section:nth-child(odd), .form-group:nth-child(odd)').forEach(function(element, index) {
        element.classList.add('slide-in-left');
        element.style.transitionDelay = (index * 0.1 + 0.2) + 's';
    });
    
    // Add slide-in-right to right elements
    document.querySelectorAll('.info-section:nth-child(even), .form-group:nth-child(even)').forEach(function(element, index) {
        element.classList.add('slide-in-right');
        element.style.transitionDelay = (index * 0.1 + 0.2) + 's';
    });
    
    // Add zoom-in to cards
    document.querySelectorAll('.glass-card').forEach(function(card, index) {
        card.classList.add('zoom-in');
        card.style.transitionDelay = (index * 0.2 + 0.3) + 's';
    });
    
    // Add hover effects
    document.querySelectorAll('.form-card').forEach(function(card) {
        card.classList.add('hover-glow');
    });
    
    document.querySelectorAll('.info-card').forEach(function(card) {
        card.classList.add('hover-scale');
    });
    
    document.querySelectorAll('.submit-btn').forEach(function(btn) {
        btn.classList.add('hover-float');
    });
    
    // Add floating animation to specific elements
    document.querySelectorAll('.hero-title').forEach(function(title) {
        title.classList.add('floating-slow');
    });
    
    document.querySelectorAll('.form-image').forEach(function(image) {
        image.classList.add('floating');
    });
    
    document.querySelectorAll('.info-icon').forEach(function(icon) {
        icon.classList.add('pulse');
    });
    
    // Add moving background to page container
    document.querySelectorAll('.page-container').forEach(function(container) {
        container.classList.add('moving-bg');
    });
}

// Trigger animations for elements in viewport
function triggerAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    elements.forEach(function(element) {
        if (isElementInViewport(element) && !element.classList.contains('active')) {
            element.classList.add('active');
        }
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
    );
}