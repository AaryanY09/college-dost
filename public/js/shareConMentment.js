const socket = io();

socket.on("new-shareConMent", () => {
    location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
    initStaggeredCards();
    initFileInputPreview();
    initSafeDelete();
});

/**
 * Creates an elegant cascading load-in effect for the dashboard cards
 */
function initStaggeredCards() {
    const cards = document.querySelectorAll('.animate-slide-up');
    cards.forEach((card, index) => {
        // Delays each card block slightly after the last one for smooth ripple entry
        card.style.animationDelay = `${index * 0.08}s`;
    });
}

/**
 * Updates file status dynamically when a mentor attaches documents
 */
function initFileInputPreview() {
    const fileInput = document.getElementById('file-input');
    const namePreview = document.getElementById('file-name-preview');

    if (fileInput && namePreview) {
        // Force-clearing any stale browser-cached input states on load
        fileInput.value = ""; 

        fileInput.addEventListener('change', function(e) {
            // Using standard 'this.files' ensures maximum browser compatibility
            if (this.files && this.files.length > 0) {
                const filename = this.files[0].name;
                
                // Smart truncation for clean UI spacing
                namePreview.textContent = filename.length > 25 
                    ? filename.substring(0, 22) + '...' 
                    : filename;
                
                namePreview.style.color = "#22c55e"; // Success accent highlight
            } else {
                namePreview.textContent = "No file selected";
                namePreview.style.color = "#64748b";
            }
        });
    }
}

/**
 * Graceful validation interception before deleting posts to reduce errors
 */
function initSafeDelete() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Block direct execution route momentarily
            e.preventDefault();
            const destinationUrl = button.getAttribute('href');
            
            // Subtle built-in visual prompt confirm block
            const confirmed = confirm("Are you sure you want to permanently delete this announcement?");
            if (confirmed) {
                const card = button.closest('.card');
                if (card) {
                    // Visual removal transition trick
                    card.style.transition = "all 0.3s ease";
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.9) translateY(10px)";
                    
                    // Finalize backend routing execution match
                    setTimeout(() => {
                        window.location.href = destinationUrl;
                    }, 250);
                } else {
                    window.location.href = destinationUrl;
                }
            }
        });
    });
}