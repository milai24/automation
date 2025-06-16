document.addEventListener('DOMContentLoaded', () => {
    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Add animation
            button.classList.add('added');
            setTimeout(() => button.classList.remove('added'), 500);
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Order button click handler
    const orderBtn = document.querySelector('.order-btn');
    orderBtn.addEventListener('click', () => {
        alert('Order functionality will be implemented soon!');
    });

    // Add smooth scroll to page
    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#fff';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});
