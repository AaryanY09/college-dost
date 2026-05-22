document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SMOOTH APPEARANCE ON PAGE LOAD (Intersection Observer) ---
    const revealItems = document.querySelectorAll(".reveal-item");
    
    const observerOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Creates a flawless staggering entry flow delay
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealItems.forEach(item => appearanceObserver.observe(item));


    // --- 2. HIGH PERFORMANCE 3D MOTION CARDS ---
    const dashboardCards = document.querySelectorAll(".card");

    // Check if the current device has touch support (skip tilts on mobile for stability)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        dashboardCards.forEach(card => {
            card.addEventListener("mousemove", (event) => {
                const cardRect = card.getBoundingClientRect();
                
                // Track precise positioning offsets
                const mouseX = event.clientX - cardRect.left;
                const mouseY = event.clientY - cardRect.top;
                
                const cardWidth = cardRect.width;
                const cardHeight = cardRect.height;

                // Find center intersection offsets
                const rotateX = ((cardHeight / 2 - mouseY) / (cardHeight / 2)) * 8; 
                const rotateY = ((mouseX - cardWidth / 2) / (cardWidth / 2)) * 8;

                // Apply interactive transformation values matrix calculations dynamically
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            // Smoothly reset back to layout position
            card.addEventListener("mouseleave", () => {
                card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
            });
        });
    }
});