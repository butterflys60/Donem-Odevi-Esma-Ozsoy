document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to a server
                alert('Teşekkürler! ' + email + ' adresiniz bültenimize kaydedildi.');
                emailInput.value = '';
            }
        });
    }
    
    // Image Lazy Loading
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // Vehicle Model Filtering (for comparison page)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modelItems = document.querySelectorAll('.model-item');
    
    if (filterBtns.length > 0 && modelItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                modelItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = item.dataset.category === filter ? 'block' : 'none';
                    }
                });
            });
        });
    }
    
    // Animated Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    // Vehicle Comparison Tool
    const compareForm = document.getElementById('compare-form');
    
    if (compareForm) {
        compareForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const vehicle1 = document.getElementById('vehicle1').value;
            const vehicle2 = document.getElementById('vehicle2').value;
            
            if (vehicle1 && vehicle2) {
                // In a real application, you would load the comparison data
                document.getElementById('comparison-results').style.display = 'block';
                document.getElementById('comparison-loading').style.display = 'none';
                
                // Scroll to results
                document.getElementById('comparison-results').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}); 