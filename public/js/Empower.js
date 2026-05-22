document.addEventListener("DOMContentLoaded", () => {
    // Ensure GSAP is fully loaded before executing animations
    if (typeof gsap !== "undefined") {
        
        // 1. Smooth Fade-in & Drop down for Header elements
        gsap.from("#header", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".logo, .emp, .box", {
            opacity: 0,
            y: -20,
            duration: 0.8,
            delay: 0.3,
            stagger: 0.15, // Creates sequential loading feel
            ease: "power2.out"
        });

        // 2. Beautiful rising stagger effect for the information blocks
        gsap.to(".animate-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            stagger: 0.25, // Blocks appear one after the another smoothly
            ease: "power4.out"
        });

    } else {
        // Fallback if GSAP fails to load via CDN
        const cards = document.querySelectorAll('.animate-card');
        cards.forEach(card => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        });
    }
});