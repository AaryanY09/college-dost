// Check if io is defined to prevent errors if socket.io client script isn't loaded on this page
if (typeof io !== 'undefined') {
    const socket = io();
    socket.on("new-shareConAlu", () => {
        location.reload();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initFileUploader();
    initScrollStagger();
    initFormProtection();
});

/**
 * Updates selected files contextually within custom stylized UI labels
 */
function initFileUploader() {
    const fileInput = document.getElementById("file-upload");
    const filePreview = document.getElementById("file-name-preview");

    if (fileInput && filePreview) {
        // Explicitly clear value on setup to avoid cached browser inputs holding state
        fileInput.addEventListener("change", (event) => {
            if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                const sizeInKb = (file.size / 1024).toFixed(1);
                filePreview.textContent = `Selected: ${file.name} (${sizeInKb} KB)`;
                filePreview.style.color = "#16a34a";
            } else {
                filePreview.textContent = "No file chosen";
                filePreview.style.color = "#64748b";
            }
        });
    }
}

/**
 * Handles smooth staggered entry transitions and scroll micro-movements
 */
function initScrollStagger() {
    const cards = document.querySelectorAll(".card");
    
    // Extends structural grid rendering delay rules over high volume data loops
    cards.forEach((card, index) => {
        if (index > 3) {
            card.style.animationDelay = `${Math.min(index * 0.06, 0.6)}s`;
        }
    });

    const observerOptions = {
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px"
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateY(0)";
                entry.target.style.opacity = "1";
            }
        });
    }, observerOptions);

    cards.forEach(card => intersectionObserver.observe(card));
}

/**
 * Protects form data actions with visual block indicators and confirmation filters
 */
function initFormProtection() {
    const contentForm = document.getElementById("contentForm");
    const submitBtn = document.querySelector(".submit-btn");

    if (contentForm && submitBtn) {
        contentForm.addEventListener("submit", () => {
            submitBtn.textContent = "Publishing Content...";
            submitBtn.style.opacity = "0.75";
            submitBtn.style.pointerEvents = "none";
        });
    }

    // Capture delete routes to offer clean transitional escapes
    const deleteActions = document.querySelectorAll(".delete-action");
    deleteActions.forEach(actionBtn => {
        actionBtn.addEventListener("click", (event) => {
            const isConfirmed = confirm("Are you sure you want to permanently delete this content?");
            if (!isConfirmed) {
                event.preventDefault(); // HALT back-end delete routing execution
            } else {
                const structureCard = actionBtn.closest(".card");
                if (structureCard) {
                    structureCard.style.transition = "all 0.3s cubic-bezier(0.4, 0, 1, 1)";
                    structureCard.style.transform = "scale(0.92) translateY(15px)";
                    structureCard.style.opacity = "0";
                }
            }
        });
    });
}