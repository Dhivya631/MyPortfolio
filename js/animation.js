// Animation utilities
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupTypewriter();
        this.setupNavbarScroll();
        this.initTooltips();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.dataset.delay || 0;
                    
                    setTimeout(() => {
                        element.style.animationPlayState = 'running';
                        element.classList.add('animated');
                    }, delay * 1000);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .bounce-in').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }

    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.dataset.text || element.textContent;
            element.textContent = '';
            
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
        });
    }

    setupNavbarScroll() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    static pageTransition() {
        document.body.style.opacity = '0';
        document.body.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            document.body.style.transition = 'all 0.5s ease';
            document.body.style.opacity = '1';
            document.body.style.transform = 'scale(1)';
        }, 100);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
    AnimationManager.pageTransition();
});
