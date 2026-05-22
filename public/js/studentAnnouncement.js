const socket = io();

socket.on("new-announcement", () => {

    location.reload();

});

document.addEventListener('DOMContentLoaded', () => {
    initScrollRevelations();
    initWebSocketStream();
});

/**
 * Tracks viewport layout metrics to animate moving modules 
 * seamlessly onto the screen grid frame context during active scroll.
 */
function initScrollRevelations() {
    const cards = document.querySelectorAll('.announcement-card');
    
    if (!('IntersectionObserver' in window)) return;

    const observerSettings = {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetCard = entry.target;
                targetCard.style.opacity = '1';
                targetCard.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(targetCard);
            }
        });
    }, observerSettings);

    cards.forEach(card => {
        // Prepare layout items for custom runtime transformations
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, opacity 0.45s ease';
        scrollObserver.observe(card);
    });
}

/**
 * Receives incoming server updates instantly via real-time WebSocket 
 * channels, cleanly injecting blocks without flashing or causing window layout skips.
 */
function initWebSocketStream() {
    if (typeof io !== 'undefined') {
        const socket = io();

        socket.on('newAnnouncement', (data) => {
            const feedContainer = document.getElementById('announcement-feed');
            if (!feedContainer) return;

            // Structural construction of card elements mapping cleanly to HBS framework arrays
            const newCard = document.createElement('div');
            newCard.className = 'announcement-card live-arrival';
            if (data.announcement_id) {
                newCard.setAttribute('data-id', data.announcement_id);
            }

            let fileLinkSegment = '';
            if (data.file_url) {
                fileLinkSegment = `
                    <div class="action-wrapper">
                        <a href="${data.file_url}" download class="download-btn">
                            <span class="btn-icon">⬇</span> Download Attachment
                        </a>
                    </div>
                `;
            }

            newCard.innerHTML = `
                <div class="card-inner">
                    <h3>${sanitizeDataString(data.title)}</h3>
                    <p>${sanitizeDataString(data.message)}</p>
                    
                    <div class="meta-wrapper">
                        <small class="meta-item">
                            <span class="icon">👤</span> Posted by: <strong>${sanitizeDataString(data.mentor_name || 'Mentor')}</strong>
                        </small>
                        <small class="meta-item">
                            <span class="icon">📅</span> Date: <span>${sanitizeDataString(data.created_at || 'Just Now')}</span>
                        </small>
                    </div>
                    ${fileLinkSegment}
                </div>
            `;

            // Prepends dynamic data onto structural elements at the top of the timeline
            feedContainer.insertBefore(newCard, feedContainer.firstChild);
        });
    }
}

/**
 * Strips HTML code segments to avoid data injection issues via stream pipes
 */
function sanitizeDataString(inputStr) {
    if (!inputStr) return '';
    return String(inputStr)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}