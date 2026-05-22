document.addEventListener("DOMContentLoaded", () => {
    initEntranceAnimations();
    initDynamicParallaxCards();
});

/**
 * Handles cascading element entrances for a smooth initial page reveal
 */
function initEntranceAnimations() {
    const heroTitle = document.querySelector('.welcome h1');
    const heroSubtitle = document.querySelector('.welcome p');
    const cards = document.querySelectorAll('.card');

    // Display Hero Context Info
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 100);
    }

    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            heroSubtitle.style.opacity = "1";
            heroSubtitle.style.transform = "translateY(0)";
        }, 200);
    }

    // Staggered calculation loops for operational dashboard blocks
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 + (index * 70)); // Staggers container transitions cleanly
    });
}

/**
 * Captures directional coordinates to tilt cards toward active cursor trajectories
 */
function initDynamicParallaxCards() {
    const cards = document.querySelectorAll('.card');
    
    // Disable interaction paths on legacy or handheld mobile viewpoints
    if (window.innerWidth < 768) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            
            // Derive tracking map values relative to individual center axes
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Bound angle metrics within isolated 4-degree boundaries
            const rotateX = ((centerY - y) / centerY) * 4; 
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Reset geometry properties completely when exiting component zones
        card.addEventListener('mouseleave', () => {
            card.style.transform = `translateY(0) perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
}