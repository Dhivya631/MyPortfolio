// Particles.js Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: { enable: true, value_area: 800 }
                },
                color: {
                    value: ['#00BFFF', '#8A2BE2', '#FF1493', '#00FF7F']
                },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00BFFF',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initParticles, 500);
});
