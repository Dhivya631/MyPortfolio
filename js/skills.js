// Skills page specific functionality
class SkillsManager {
    constructor() {
        this.init();
    }

    init() {
        this.animateProgressBars();
        this.setupSkillHovers();
        this.animateStats();
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.dataset.width;
                    
                    setTimeout(() => {
                        progressBar.style.width = width + '%';
                    }, 100);
                }
            });
        }, observerOptions);

        progressBars.forEach(bar => {
            bar.style.width = '0%';
            observer.observe(bar);
        });
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statElement = entry.target;
                    const finalValue = parseInt(statElement.textContent);
                    
                    this.countUp(statElement, 0, finalValue, 2000);
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    countUp(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + range * progress);
            
            element.textContent = current + (element.textContent.includes('+') ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }
}

// Initialize skills animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SkillsManager();
});
