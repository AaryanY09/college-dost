document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth Interactive Accordion Logic
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const faqItem = this.parentElement;
            const faqAnswer = this.nextElementSibling;

            // Check if item is already active
            const isActive = faqItem.classList.contains("active");

            // Close all other open FAQ items for a clean aesthetic accordian sequence
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;
            });

            // If it wasn't active, activate it and transition heights cleanly
            if (!isActive) {
                faqItem.classList.add("active");
                // set height dynamically using the content scrollHeight
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            }
        });
    });

    // 2. Scroll Intersection Animation Observer (Moving Blocks Effect)
    const movingBlocks = document.querySelectorAll(".animate-box");

    const observerOptions = {
        root: null, // relative to viewport
        threshold: 0.1, // triggers when 10% of element is seen
        rootMargin: "0px 0px -50px 0px"
    };

    const blockObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stops watching once element is animated in
            }
        });
    }, observerOptions);

    movingBlocks.forEach(block => {
        blockObserver.observe(block);
    });
});