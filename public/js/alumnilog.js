document.addEventListener("DOMContentLoaded", () => {
    animateLoginContainer();
    initFormInteractions();
});

/**
 * Triggers an elegant entrance animation reveal sequence for the centralized container panel
 */
function animateLoginContainer() {
    const card = document.getElementById("login-container");
    if (card) {
        setTimeout(() => {
            card.style.transition = "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150);
    }
}

/**
 * Attaches functional interface animations to focus validation loops
 */
function initFormInteractions() {
    const authForm = document.getElementById("auth-form");
    const container = document.getElementById("login-container");
    const textInputs = document.querySelectorAll("form input");

    if (!authForm || !container) return;

    // Provide a light spring effect to inputs on programmatic focus events
    textInputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.style.transform = "translateX(2px)";
            input.parentElement.style.transition = "transform 0.2s ease";
        });
        input.addEventListener("blur", () => {
            input.parentElement.style.transform = "translateX(0)";
        });
    });

    // Client-side visual validation animation layout helper
    authForm.addEventListener("submit", (e) => {
        let formValid = true;
        
        textInputs.forEach(input => {
            if (!input.value.trim()) {
                formValid = false;
            }
        });

        if (!formValid) {
            e.preventDefault(); // HALT execution loop paths
            
            // Trigger horizontal error shake animation layout properties
            container.style.transform = "translateX(0)";
            let shakeSequence = [ -10, 10, -10, 10, -6, 6, 0 ];
            let frameCounter = 0;

            let shakeTimer = setInterval(() => {
                if (frameCounter < shakeSequence.length) {
                    container.style.transform = `translateX(${shakeSequence[frameCounter]}px)`;
                    container.style.transition = "none";
                    frameCounter++;
                } else {
                    clearInterval(shakeTimer);
                    container.style.transform = "translateY(0)";
                    container.style.transition = "transform 0.3s ease";
                }
            }, 50);
        }
    });
}