// Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;

    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover States
document.querySelectorAll('a, button, .sol-card, .tech-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        outline.style.background = 'rgba(255, 0, 204, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        outline.style.transform = 'translate(-50%, -50%) scale(1)';
        outline.style.background = 'transparent';
    });
});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(30px)";
    s.style.transition = "all 0.8s ease-out";
    observer.observe(s);
});