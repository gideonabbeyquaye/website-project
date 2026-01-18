document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle Mobile Menu
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const service = contactForm.querySelector('select[name="service"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            
            let isValid = true;
            let errorMessage = "Please correct the following errors:\n";

            if (name.value.trim() === "") {
                isValid = false;
                errorMessage += "- Name is required.\n";
            }

            if (email.value.trim() === "") {
                isValid = false;
                errorMessage += "- Email is required.\n";
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    isValid = false;
                    errorMessage += "- Please enter a valid email address.\n";
                }
            }

            if (!service.value) {
                isValid = false;
                errorMessage += "- Please select a service.\n";
            }

            if (message.value.trim() === "") {
                isValid = false;
                errorMessage += "- Message cannot be empty.\n";
            }

            if (isValid) {
                alert("Thank you, " + name.value + "! Your quote request has been sent successfully.");
                contactForm.reset();
            } else {
                alert(errorMessage);
            }
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
            
            // Toggle max-height for smooth animation
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hide');
    }
});