document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. GSAP Entrances (Smooth Moving Blocks on Load) ---
    if (typeof gsap !== "undefined") {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

        // Fade down title elements
        tl.from(".heading-area h1", { opacity: 0, y: -30, duration: 0.8 })
          .from(".heading-area h3", { opacity: 0, y: -15, duration: 0.6 }, "-=0.4")
          
          // Animate panels flying inwards smoothly from side axes
          .from(".animate-left", { opacity: 0, x: -70, duration: 1 }, "-=0.5")
          .from(".animate-right", { opacity: 0, x: 70, duration: 1 }, "-=0.9");
    }

    // --- 2. Advanced Interactive Form Mouse-Tracking Effect ---
    const formCard = document.querySelector(".interactive-form");
    
    if (formCard) {
        document.addEventListener("mousemove", (e) => {
            // Calculate mouse positions relative to window center to gently rotate blocks
            const xAxis = (window.innerWidth / 2 - e.pageX) / 65;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 65;
            
            // Apply lightweight parallax tilt to form and contact panels
            if(window.innerWidth > 850) { // Execute only on large desktop screens for fluid UX
                formCard.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
            }
        });

        // Reset positions smoothly when mouse exits window focus
        document.addEventListener("mouseleave", () => {
            formCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            formCard.style.transition = "all 0.5s ease";
        });
        
        formCard.addEventListener("mouseenter", () => {
            formCard.style.transition = "none";
        });
    }

    // --- 3. Interactive Subtle Micro-effects for Inputs ---
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        // Floating push effects when writing inside modern UI entries
        input.addEventListener("focus", () => {
            gsap.to(input, { scale: 1.015, duration: 0.2 });
        });
        input.addEventListener("blur", () => {
            gsap.to(input, { scale: 1, duration: 0.2 });
        });
    });

    // Button Click interactive shockwave snap
    const submitBtn = document.querySelector("button[type='submit']");
    if(submitBtn) {
        submitBtn.addEventListener("mousedown", () => {
            gsap.to(submitBtn, { scale: 0.95, duration: 0.1 });
        });
        submitBtn.addEventListener("mouseup", () => {
            gsap.to(submitBtn, { scale: 1.03, duration: 0.15 });
        });
    }
});