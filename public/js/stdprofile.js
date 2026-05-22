document.addEventListener("DOMContentLoaded", () => {
    initAvatar();
    initPasswordToggle();
});

/**
 * Parses user initials to dynamically populate the avatar ring profile icon placeholder.
 */
function initAvatar() {
    const nameElement = document.querySelector(".profile-display-name");
    const avatarInitials = document.getElementById("avatar-initials");
    
    if (nameElement && avatarInitials) {
        const nameText = nameElement.textContent.trim();
        if (nameText) {
            const tokens = nameText.split(/\s+/);
            let initials = "";
            
            if (tokens.length >= 2) {
                initials = tokens[0].charAt(0) + tokens[tokens.length - 1].charAt(0);
            } else if (tokens.length === 1) {
                initials = tokens[0].substring(0, 2);
            }
            
            avatarInitials.textContent = initials.toUpperCase();
        }
    }
}

/**
 * Handles the view toggle state logic engine for the password component.
 */
function initPasswordToggle() {
    const toggleBtn = document.getElementById("toggle-password-btn");
    const passwordField = document.getElementById("password-field");
    
    if (!toggleBtn || !passwordField) return;

    let isHidden = true;
    const plainTextPassword = passwordField.getAttribute("data-raw") || "";
    const maskedText = "••••••••";

    toggleBtn.addEventListener("click", () => {
        if (isHidden) {
            passwordField.textContent = plainTextPassword;
            toggleBtn.textContent = "Hide";
            isHidden = false;
        } else {
            passwordField.textContent = maskedText;
            toggleBtn.textContent = "Show";
            isHidden = true;
        }
    });
}