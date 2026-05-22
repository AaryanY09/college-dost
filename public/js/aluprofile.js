document.addEventListener("DOMContentLoaded", () => {
    animateProfileCard();
    initPasswordToggler();
});

function animateProfileCard() {
    const card = document.getElementById("profile-card");
    if (card) {
        setTimeout(() => {
            card.style.transition = "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150);
    }
}

function initPasswordToggler() {
    const toggleBtn = document.getElementById("toggle-pwd-btn");
    const pwdText = document.getElementById("pwd-text");

    if (!toggleBtn || !pwdText) return;

    toggleBtn.addEventListener("click", () => {
        const rawValue = pwdText.getAttribute("data-raw-password");
        const isHidden = pwdText.classList.contains("obscured");

        if (isHidden) {
            pwdText.textContent = rawValue;
            pwdText.classList.remove("obscured");
            toggleBtn.textContent = "Hide";
            toggleBtn.style.color = "#ef4444";
        } else {
            pwdText.textContent = "••••••••";
            pwdText.classList.add("obscured");
            toggleBtn.textContent = "Show";
            toggleBtn.style.color = "#64748b";
        }
    });
}