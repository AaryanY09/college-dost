document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adminLoginForm");
    const loginBtn = document.querySelector(".ripple-btn");

    // 1. Dynamic Button Click Ripple Mechanics
    if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
            // Assess required elements tracking before rendering style nodes
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

    // 2. Focused Inputs Card Highlighting Transitions
    const formInputs = document.querySelectorAll("form input");
    formInputs.forEach(input => {
        input.addEventListener("focus", () => {
            form.style.borderColor = "rgba(30, 60, 114, 0.25)";
        });
        input.addEventListener("blur", () => {
            form.style.borderColor = "rgba(255, 255, 255, 0.7)";
        });
    });
});