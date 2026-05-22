document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const rippleButtons = document.querySelectorAll(".ripple-btn");

    // Helper function to dynamically show/update frontend errors using your existing CSS layout
    const showFrontendError = (message) => {
        // Check if an error container already exists; if not, create one
        let errorContainer = form.querySelector(".error-container");
        if (!errorContainer) {
            errorContainer = document.createElement("div");
            errorContainer.classList.add("error-container");
            
            // Insert it right above the divider or before the login redirect button
            const divider = form.querySelector(".divider");
            form.insertBefore(errorContainer, divider);
        }
        
        // Update the message and trigger your shake animation
        errorContainer.innerHTML = `<p class="error-msg">${message}</p>`;
        errorContainer.style.animation = 'none';
        errorContainer.offsetHeight; // Trigger a DOM reflow to restart the animation
        errorContainer.style.animation = 'shake 0.4s ease-in-out';
    };

    // Helper function to clear frontend errors if everything looks good
    const clearFrontendError = () => {
        const errorContainer = form.querySelector(".error-container");
        if (errorContainer) {
            errorContainer.remove();
        }
    };

    // 1. Interactive Button Click Ripple Mechanics & Frontend Validation
    rippleButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            if (this.getAttribute("type") === "submit") {
                const inputs = form.querySelectorAll('input[required]');
                let allFilled = true;
                inputs.forEach(input => { if (!input.value) allFilled = false; });
                if (!allFilled) return; // Let browser HTML5 required validation take over if fields are empty

                // Gather input values for validation
                const prnValue = form.querySelector('input[name="prn"]').value.trim();
                const passwordValue = form.querySelector('input[name="password"]').value;

                // Validation Rule A: PRN must be exactly 10 digits
                const prnRegex = /^\d{10}$/;
                if (!prnRegex.test(prnValue)) {
                    e.preventDefault(); // Stop the form from submitting to the backend
                    showFrontendError("Please enter a valid 10-digit PRN.");
                    return;
                }

                // Validation Rule B: Password must be at least 8 characters long
                if (passwordValue.length < 8) {
                    e.preventDefault(); // Stop the form from submitting to the backend
                    showFrontendError("Password must be at least 8 characters long.");
                    return;
                }

                // If everything is completely correct, clear any leftover frontend warning blocks
                clearFrontendError();
            }

            // Ripple Effect Logic (Untouched)
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 500);
        });
    });

    // 2. Structural Form Border Transitions (Untouched)
    const inputs = document.querySelectorAll("form input");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            form.style.borderColor = "rgba(91, 91, 255, 0.25)";
        });
        input.addEventListener("blur", () => {
            form.style.borderColor = "rgba(255, 255, 255, 0.6)";
        });
    });
});