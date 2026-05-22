document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const fileNameSpan = document.getElementById('fileName');
    const messageArea = document.getElementById('messageArea');
    const charCount = document.getElementById('charCount');
    const cards = document.querySelectorAll('.card');
    const form = document.getElementById('spotlightForm');
    const submitBtn = document.getElementById('submitBtn');

    // 1. Smooth Entry Stagger Animation for Existing Feed Cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // 100ms stagger delay per card
    });

    // 2. Real-time Formatting & Character Counter
    if (messageArea && charCount) {
        messageArea.addEventListener('input', () => {
            const len = messageArea.value.length;
            charCount.textContent = `${len} character${len === 1 ? '' : 's'}`;
            
            if (len > 0) {
                charCount.classList.add('active');
            } else {
                charCount.classList.remove('active');
            }
        });
    }

    // 3. Dynamic File Upload Input Feedback
    if (fileInput && fileNameSpan) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const name = e.target.files[0].name;
                // Truncate long file names cleanly
                fileNameSpan.textContent = name.length > 25 ? name.substring(0, 22) + '...' : name;
                fileNameSpan.classList.add('file-selected');
            } else {
                fileNameSpan.textContent = 'No file selected';
                fileNameSpan.classList.remove('file-selected');
            }
        });
    }

    // 4. Subtle Submit Button Loading State (Without breaking standard form submission)
    if (form && submitBtn) {
        form.addEventListener('submit', () => {
            submitBtn.innerText = 'Posting...';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.pointerEvents = 'none';
        });
    }

    // 5. Smooth Interactivity for Deletion Click
    const deleteButtons = document.querySelectorAll('.delete-action');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmation = confirm("Are you sure you want to delete this spotlight post?");
            if (!confirmation) {
                e.preventDefault(); // Aborts the link redirect if user cancels
            } else {
                // If confirmed, fade out the card right away for desktop snappiness
                const card = btn.closest('.card');
                if (card) {
                    card.style.transform = 'scale(0.95)';
                    card.style.opacity = '0';
                }
            }
        });
    });
});