document.addEventListener("DOMContentLoaded", () => {
    runEntranceCascades();
    setupCard3DParallax();
});

/**
 * Executes cascading entry reveals over typography and layout structures
 */
function runEntranceCascades() {
    const mainTitle = document.querySelector('.welcome h1');
    const mainSubtitle = document.querySelector('.welcome p');
    const systemCards = document.querySelectorAll('.card');

    if (mainTitle) {
        setTimeout(() => {
            mainTitle.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            mainTitle.style.opacity = "1";
            mainTitle.style.transform = "translateY(0)";
        }, 100);
    }

    if (mainSubtitle) {
        setTimeout(() => {
            mainSubtitle.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            mainSubtitle.style.opacity = "1";
            mainSubtitle.style.transform = "translateY(0)";
        }, 200);
    }

    // Incremental staggered loops over card arrays
    systemCards.forEach((card, step) => {
        setTimeout(() => {
            card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 300 + (step * 80));
    });
}

/**
 * Captures directional coordinates to tilt cards toward active cursor trajectories
 */
function setupCard3DParallax() {
    const targetCards = document.querySelectorAll('.card');
    
    // Bypass compute cycles on touchscreen viewport footprints
    if (window.innerWidth < 768) return;

    targetCards.forEach(card => {
        card.addEventListener('mousemove', (event) => {
            const layoutFrame = card.getBoundingClientRect();
            
            // Calculate absolute pixel displacement relative to central point axes
            const currentX = event.clientX - layoutFrame.left;
            const currentY = event.clientY - layoutFrame.top;
            
            const middlePointX = layoutFrame.width / 2;
            const middlePointY = layoutFrame.height / 2;
            
            // Cap mathematical matrix distortion paths within a strict 4-degree envelope
            const transformationX = ((middlePointY - currentY) / middlePointY) * 4; 
            const transformationY = ((currentX - middlePointX) / middlePointX) * 4;

            card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${transformationX}deg) rotateY(${transformationY}deg)`;
        });

        // Instantly restore layout dimensions when mouse boundaries break clear
        card.addEventListener('mouseleave', () => {
            card.style.transform = `translateY(0) perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
}