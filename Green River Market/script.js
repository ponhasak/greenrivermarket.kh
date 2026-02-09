// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    
    // Add animation
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.animation = 'slideInDown 0.3s ease';
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Shopping Cart Functionality
let cartCount = 3;
const cartBadge = document.querySelector('.cart-badge');
const cartButtons = document.querySelectorAll('button:has(.fa-cart-plus)');

cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Increment cart count
        cartCount++;
        cartBadge.textContent = cartCount;
        
        // Add pulse animation
        cartBadge.classList.add('pulse-animation');
        setTimeout(() => {
            cartBadge.classList.remove('pulse-animation');
        }, 600);
        
        // Get product name and show notification
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        showAddToCartNotification(productName);
        
        // Animate button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Notification System
function showAddToCartNotification(productName) {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: slideInDown 0.3s ease, slideOut 0.3s ease 2.7s forwards;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        document.body.appendChild(notification);
    }
    
    notification.innerHTML = `<i class="fas fa-check-circle"></i>${productName} " ("<span class="khmer-text">បានបន្ថែមទៅរទេះ</span>)`;
    notification.style.animation = 'slideInDown 0.3s ease, slideOut 0.3s ease 2.7s forwards';
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Language Toggle (for Cambodian/English)
document.addEventListener('DOMContentLoaded', function() {
    // Check if Cambodian is already selected
    const languagePreference = localStorage.getItem('language') || 'km'; // Default to Khmer
    
    // You can add a language toggle button here if needed
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Newsletter subscription
const newsletterButton = document.querySelector('footer input + button');
if (newsletterButton) {
    newsletterButton.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = this.previousElementSibling;
        const email = emailInput.value;
        
        if (email) {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                showNotification('ចុះឈ្មោះ​​សិក្សាប្រចាំថ្ងៃ​ដ៏អស្ចារ្យ!', 'success');
                emailInput.value = '';
            } else {
                showNotification('សូមបញ្ចូលអាសយដ្ឋាន​ ដីម៉ែល​ដ៏ត្រឹមត្រូវ', 'error');
            }
        }
    });
}

function showNotification(message, type) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    
    const bgColor = type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 20px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideInDown 0.4s ease, slideOut 0.4s ease 3s forwards;
        font-weight: 600;
        font-size: 14px;
    `;
    notification.textContent = message;
}

// Add CSS animation styles via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Product search functionality (optional enhancement)
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
                product.style.animation = 'scaleIn 0.3s ease';
            } else {
                product.style.display = 'none';
            }
        }, 150);
    });
}

// Hover effects for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#2563eb';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#374151';
    });
});

// Add animation to numbers on scroll
const stats = document.querySelectorAll('.text-3xl.font-bold');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            animateNumbers();
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => {
    statsObserver.observe(stat);
});

function animateNumbers() {
    const numElements = document.querySelectorAll('.text-3xl.font-bold');
    numElements.forEach(element => {
        const target = parseInt(element.textContent);
        if (target > 0) {
            let current = 0;
            const increment = Math.ceil(target / 30);
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(counter);
                } else {
                    element.textContent = current.toLocaleString();
                }
            }, 50);
        }
    });
}

// Log to console for debugging
console.log('FreshCatch website initialized successfully!');
