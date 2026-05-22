if (typeof io !== 'undefined') {
    const socket = io();
    socket.on("new-culture", () => {
        location.reload();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initFilePreview();
    initScrollAnimations();
    initFormInteractions();
});

/**
 * Updates file labels instantly when a file is staged for upload.
 */
function initFilePreview() {
    const fileInput = document.getElementById("file-upload");
    const filePreview = document.getElementById("file-name-preview");

    if (fileInput && filePreview) {
        fileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files.length > 0) {
                const name = e.target.files[0].name;
                const size = (e.target.files[0].size / 1024).toFixed(1);
                filePreview.textContent = `Selected: ${name} (${size} KB)`;
                filePreview.style.color = "#16a34a";
            } else {
                filePreview.textContent = "No file chosen";
                filePreview.style.color = "#64748b";
            }
        });
    }
}

/**
 * Handles smooth element scaling, micro-movements on scroll,
 * and entry staggering delays for newly added blocks.
 */
function initScrollAnimations() {
    const cards = document.querySelectorAll(".card");
    
    // Distribute entry delays programmatically for all existing cards
    cards.forEach((card, index) => {
        if (index > 3) {
            card.style.animationDelay = `${Math.min(index * 0.05, 0.5)}s`;
        }
    });

    // Intersection observer to track scrolling movements dynamically
    const observerOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateY(0)";
                entry.target.style.opacity = "1";
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));
}

/**
 * Wire click transformations and state-safe visual blockers to buttons
 */
function initFormInteractions() {
    const form = document.getElementById("postForm");
    const submitBtn = document.querySelector(".submit-btn");

    if (form && submitBtn) {
        form.addEventListener("submit", () => {
            // Give visual feedback when saving content down back-end channels
            submitBtn.textContent = "Publishing Feed...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";
        });
    }

    // Interactive confirmation interceptor for deletes
    const deleteButtons = document.querySelectorAll(".delete-action");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const confirmed = confirm("Are you sure you want to permanently delete this post?");
            if (!confirmed) {
                e.preventDefault(); // Stop route firing if canceled
            } else {
                const targetCard = btn.closest(".card");
                if (targetCard) {
                    targetCard.style.transition = "all 0.3s cubic-bezier(0.4, 0, 1, 1)";
                    targetCard.style.transform = "scale(0.9) translateY(10px)";
                    targetCard.style.opacity = "0";
                }
            }
        });
    });
}