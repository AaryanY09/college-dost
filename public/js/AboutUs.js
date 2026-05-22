// Register the core ScrollTrigger layout engine extension
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    executePageAnimations();
});

function executePageAnimations() {
    // 1. TIMELINE SEQUENCE: Page Landing Entrance Staging
    const entranceTimeline = gsap.timeline();

    entranceTimeline.fromTo(".intro-lead", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    .fromTo(".intro-card", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
        "-=0.3"
    );

    // 2. SCROLL REVEAL FUNCTION: Cards blocks slide up smoothly upon page entry
    const animatedCards = document.querySelectorAll(".scroll-reveal");
    
    animatedCards.forEach((element) => {
        gsap.fromTo(element, 
            { y: 45, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: element,
                    start: "top 88%", // Triggers slightly before crossing view boundary parameters
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out"
            }
        );
    });

    // 3. PHYSICAL HOVER MATRIX: Interactive micro-physics reactions for specific layout items
    const microInteractiveItems = document.querySelectorAll(".feature-box, .panel-card, .scope-card, .home-btn");

    microInteractiveItems.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            gsap.to(box, {
                y: -4,
                borderColor: "#5b5bff",
                boxShadow: "0 10px 25px rgba(91, 91, 255, 0.05)",
                duration: 0.25,
                ease: "power2.out"
            });
        });

        box.addEventListener("mouseleave", () => {
            gsap.to(box, {
                y: 0,
                borderColor: "#e2e8f0",
                boxShadow: "0 4px 10px rgba(15, 23, 42, 0.01)",
                duration: 0.25,
                ease: "power2.out"
            });
        });
    });
}