document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mentorLoginForm");
    const loginBtn = document.querySelector(".ripple-btn");

    // 1. Interactive Button Click Ripple Mechanics
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            // Verify form validation properties before execution
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
            }, 550);
        });
    }

    // 2. Interactive Input Focus Transitions
    const formInputs = document.querySelectorAll("form input");
    formInputs.forEach(input => {
        input.addEventListener("focus", () => {
            form.style.borderColor = "rgba(0, 176, 155, 0.25)";
        });
        input.addEventListener("blur", () => {
            form.style.borderColor = "rgba(255, 255, 255, 0.7)";
        });
    });
});