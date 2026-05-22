document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".charts");
    const cards = document.querySelectorAll(".card");
    const bubbles = document.querySelectorAll(".bubble");

    // 1. Initial Page Reveal Animation
    setTimeout(() => {
        if (mainContainer) {
            mainContainer.classList.add("revealed");
        }
    }, 150);

    // 2. Smooth Interactive Mouse Tracking Backdrop Effect
    window.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        bubbles.forEach((bubble, index) => {
            const speed = (index + 1) * 35; 
            const moveX = (mouseX - 0.5) * speed;
            const moveY = (mouseY - 0.5) * speed;
            bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // 3. Dynamic 3D Element Tilting Effect on Block Elements
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top; 

            // Calculate angle based on pointer placement proximity to card edge
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            
            const rotateX = ((midY - y) / midY) * 6; // Max 6-degree rotation tilt
            const rotateY = ((x - midX) / midX) * 6;

            card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            // Instantly transition back cleanly when resetting positioning
            card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
        });
    });
});