document.addEventListener("DOMContentLoaded", () => {
    animateProfileCard();
    generateAvatarInitials();
    setupPasswordToggle();
});

/**
 * Triggers a clean entrance animation sequence for the profile block
 */
function animateProfileCard() {
    const card = document.getElementById("profile-card");
    if (card) {
        setTimeout(() => {
            card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100);
    }
}

/**
 * Parses user initials out of string attributes to assemble clean typography badges
 */
function generateAvatarInitials() {
    const nameLabel = document.querySelector(".profile-display-name");
    const initialContainer = document.getElementById("avatar-initials");

    if (nameLabel && initialContainer) {
        const structuralName = nameLabel.textContent.trim();
        if (structuralName) {
            const nameSegments = structuralName.split(/\s+/);
            let parsedString = "";

            if (nameSegments.length >= 2) {
                parsedString = nameSegments[0].charAt(0) + nameSegments[nameSegments.length - 1].charAt(0);
            } else if (nameSegments.length === 1) {
                parsedString = nameSegments[0].substring(0, 2);
            }

            initialContainer.textContent = parsedString.toUpperCase();
        }
    }
}

/**
 * Handles security visibility layers over masked target properties
 */
function setupPasswordToggle() {
    const toggleBtn = document.getElementById("toggle-password-btn");
    const targetField = document.getElementById("password-display");

    if (!toggleBtn || !targetField) return;

    let textStateHidden = true;
    const rawDataString = targetField.getAttribute("data-raw") || "";
    const securityMaskText = "••••••••";

    toggleBtn.addEventListener("click", () => {
        if (textStateHidden) {
            targetField.textContent = rawDataString;
            toggleBtn.textContent = "Hide";
            textStateHidden = false;
        } else {
            targetField.textContent = securityMaskText;
            toggleBtn.textContent = "Show";
            textStateHidden = true;
        }
    });
}