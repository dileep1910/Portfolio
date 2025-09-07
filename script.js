// Multi-page portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active navigation link based on current page
    function updateActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Initialize active link on page load
    updateActiveNavLink();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes when elements come into view
                if (element.classList.contains('skill-card') || 
                    element.classList.contains('timeline-item') || 
                    element.classList.contains('project-card') || 
                    element.classList.contains('contact-card')) {
                    
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1) translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-card, .timeline-item, .project-card, .contact-card');
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'scale(0.95) translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        
        observer.observe(element);
    });
    
    // Add glow effect to hero button
    const heroButton = document.querySelector('.hero-btn');
    if (heroButton) {
        setInterval(() => {
            heroButton.style.boxShadow = '0 0 ' + (20 + Math.sin(Date.now() * 0.003) * 10) + 'px hsl(271, 81%, 56%, 0.6)';
        }, 50);
    }
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.hero-bg');
        
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Add hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px -10px hsla(271, 81%, 56%, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px -10px hsla(220, 26%, 10%, 0.5)';
        });
    });
});
