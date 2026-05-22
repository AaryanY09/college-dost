// Register the core ScrollTrigger layout engine extension
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    initAnimations();
});

function initAnimations() {
    // 1. MASTER LOADING INITIALIZATION TIMELINE
    const masterTimeline = gsap.timeline();

    // Fill simulated bar smoothly
    masterTimeline.to(".loader-bar span", {
        width: "100%",
        duration: 1.0,
        ease: "power2.inOut"
    });

    // Fade logo words
    masterTimeline.to(".loader-logo", {
        letterSpacing: "10px",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in"
    }, "-=0.1");

    // Push up loader viewport mask screen
    masterTimeline.to("#loader", {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut"
    });

    // Terminate display overlay visibility
    masterTimeline.set("#loader", { display: "none" });

    // 2. INFINITE MOVING MARQUEE TAGLINE (Seamless Loop)
    // Moves the elements left continually at a steady speed
    gsap.to(".marquee-inner h2", {
        xPercent: -100,
        duration: 25,
        ease: "none",
        repeat: -1
    });

    // 3. ENTRANCE STAGING RULES (Page 1 elements fade up linearly)
    masterTimeline.fromTo(".hero-text", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.1"
    )
    .fromTo(".hero-image img", 
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.5"
    )
    .fromTo(".hero-buttons", 
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.4"
    )
    .fromTo(".learn-more", 
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
    );

    // 4. SCROLL DRIVEN TRIGGERS (Page 2 About & Features Card Reveal)
    const scrollAnimateBlocks = document.querySelectorAll(".scroll-animate");
    scrollAnimateBlocks.forEach((block) => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: "top 85%", 
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // 5. PAGE 3: SPOTLIGHT GRADIENT REVEAL MECHANISM
    gsap.from(".split-text", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top 75%",
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".middle *", {
        scrollTrigger: {
            trigger: ".middle",
            start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
    });

    // 6. PAGE 4: STAGGERED FOOTER GRID ARRIVAL
    gsap.from(".footer-box", {
        scrollTrigger: {
            trigger: "#page4",
            start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out"
    });

    // 7. GLOBAL MOUSE INTERACTION SYSTEM (Elastic Button Hover)
    const actions = document.querySelectorAll(".interactive-btn, .navbar .btn, .spotlight-btn");
    actions.forEach((target) => {
        target.addEventListener("mouseenter", () => {
            gsap.to(target, {
                scale: 1.03,
                duration: 0.25,
                ease: "power2.out"
            });
        });

        target.addEventListener("mouseleave", () => {
            gsap.to(target, {
                scale: 1,
                duration: 0.25,
                ease: "power2.out"
            });
        });
    });
}