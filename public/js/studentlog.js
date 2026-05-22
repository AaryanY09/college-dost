document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const loginBtn = document.querySelector(".ripple-btn");

    // 1. Smooth Click Ripple Effect for the login submit button
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            // Only generate ripple styling coordinates if form fields aren't empty
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;
            inputs.forEach(input => { if(!input.value) valid = false; });
            
            if(!valid) return; 

            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // 2. Inputs focus micro-interactions
    const formInputs = document.querySelectorAll("form input");
    formInputs.forEach(input => {
        input.addEventListener("focus", () => {
            form.style.borderColor = "rgba(91, 91, 255, 0.25)";
        });
        input.addEventListener("blur", () => {
            form.style.borderColor = "rgba(255, 255, 255, 0.6)";
        });
    });
});