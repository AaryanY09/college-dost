const socket = io();

socket.on("new-announcement", () => {

    location.reload();

});


document.addEventListener('DOMContentLoaded', () => {
    initFileUploader();
    initInteractionEffects();
    initSocketConnections();
});

/**
 * Updates UI instantly when file attachments are staged
 */
function initFileUploader() {
    const fileInput = document.getElementById('file-input');
    const fileChosen = document.getElementById('file-chosen');

    if (fileInput && fileChosen) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                fileChosen.textContent = this.files[0].name;
                fileChosen.style.color = '#2563eb';
                fileChosen.style.fontWeight = '500';
            } else {
                fileChosen.textContent = 'No file chosen';
                fileChosen.style.color = '#64748b';
            }
        });
    }
}

/**
 * Handles deleting animation states and micro-interactions
 */
function initInteractionEffects() {
    const container = document.getElementById('announcement-feed');
    
    if (container) {
        container.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.delete-btn');
            if (!deleteBtn) return;

            // Intercepting native request window to show smooth deletion
            e.preventDefault();
            const targetUrl = deleteBtn.getAttribute('href');
            const card = deleteBtn.closest('.announcement-card');

            if (confirm('Are you sure you want to remove this announcement?')) {
                // Add sliding out animation state before passing execution block
                card.style.transform = 'translateX(100px)';
                card.style.opacity = '0';
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 1, 1)';

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 350);
            }
        });
    }
}

/**
 * Manages socket events. When real-time data matches, it constructs HTML structure
 * and utilizes dynamic CSS keyframes to smoothly drop announcements into position.
 */
function initSocketConnections() {
    // Basic socket check safeguarding backend state patterns
    if (typeof io !== 'undefined') {
        const socket = io();

        socket.on('newAnnouncement', (data) => {
            const feed = document.getElementById('announcement-feed');
            if (!feed) return;

            // Creating the raw template structure dynamically matching HBS loop output
            const card = document.createElement('div');
            card.className = 'announcement-card new-pulse';
            card.setAttribute('data-id', data.announcement_id || '');

            let fileButtonHTML = '';
            if (data.file_url) {
                fileButtonHTML = `
                    <a href="${data.file_url}" class="download-btn" download>
                        Download Attachment
                    </a>
                `;
            }

            card.innerHTML = `
                <div class="card-content">
                    <h3>${escapeHtml(data.title)}</h3>
                    <p>${escapeHtml(data.message)}</p>
                    
                    <div class="meta-info">
                        <small>Posted by: <span>${escapeHtml(data.mentor_name || 'Mentor')}</span></small>
                        <small>Date: <span>${escapeHtml(data.created_at || 'Just Now')}</span></small>
                    </div>

                    <div class="card-actions">
                        ${fileButtonHTML}
                        <a href="/announcement/delete/${data.announcement_id}" class="delete-btn">
                            Delete
                        </a>
                    </div>
                </div>
            `;

            // Prepends node cleanly right at top of feed structure
            feed.insertBefore(card, feed.firstChild);
        });
    }
}

/**
 * Helper to prevent XSS exploits when updating content via socket channels
 */
function escapeHtml(string) {
    if (!string) return '';
    return String(string)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}