document.addEventListener("DOMContentLoaded", () => {
    // Configuration for ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'bottom',  // Elements move up from the bottom
        distance: '30px',  // Distance of movement
        duration: 800,     // Animation duration in milliseconds
        delay: 100,        // Initial delay
        reset: false       // Set to true if you want items to animate every time you scroll up/down
    });

    // Reveal the main descriptive header heading smoothly
    sr.reveal('.reveal-title', { 
        origin: 'top',
        delay: 200 
    });

    // Reveal list blocks with a gorgeous staggered interval effect
    sr.reveal('.reveal-item', { 
        interval: 80,       // Time gap between each list item rendering sequentially
        distance: '20px',
        origin: 'bottom'
    });
});