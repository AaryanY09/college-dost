const socket = io();

socket.on("new-shareConMent", () => {

    location.reload();

});


document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initRealtimeStreams();
});

/**
 * Uses modern Intersection Observers to check layout constraints 
 * and trigger elegant slide-up visual reveals as readers scroll down the screen.
 */
function initScrollAnimations() {
    const cards = document.querySelectorAll('.content-card');
    
    // Fallback safeguard pattern for legacy viewports
    if (!('IntersectionObserver' in window)) return;

    const appearanceOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(card);
            }
        });
    }, appearanceOptions);

    cards.forEach(card => {
        // Apply inline preparation states before registration loops loop
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, opacity 0.5s ease';
        cardObserver.observe(card);
    });
}

/**
 * Monitors live WebSocket transmissions to insert new materials instantly
 * using interactive dropping styles without altering existing framework parameters.
 */
function initRealtimeStreams() {
    if (typeof io !== 'undefined') {
        const socket = io();

        socket.on('newSharedContent', (data) => {
            const container = document.getElementById('resources-feed');
            if (!container) return;

            // Instantiating clean card framework node matching engine parameters
            const cardElement = document.createElement('div');
            cardElement.className = 'content-card live-drop';
            if (data.id) cardElement.setAttribute('data-id', data.id);

            let downloadSectionHTML = '';
            if (data.file_url) {
                downloadSectionHTML = `
                    <div class="file-section">
                        <a href="${data.file_url}" download class="download-btn">
                            <span class="btn-icon">⬇</span> Download Resource
                        </a>
                    </div>
                `;
            }

            cardElement.innerHTML = `
                <div class="card-inner">
                    <h3 class="content-title">
                        <span class="pin-icon">📌</span> ${sanitizeInput(data.title)}
                    </h3>
                    <p class="content-message">${sanitizeInput(data.message)}</p>
                    <div class="content-meta">
                        <span class="meta-item mentor">👨‍🏫 ${sanitizeInput(data.mentor_name || 'Mentor')}</span>
                        <span class="meta-item date">📅 ${sanitizeInput(data.created_at || 'Just Now')}</span>
                    </div>
                    ${downloadSectionHTML}
                </div>
            `;

            // Prepends dynamic entry onto the active DOM layer stream
            container.insertBefore(cardElement, container.firstChild);
        });
    }
}

/**
 * Prevents script injection vectors over active websocket channels
 */
function sanitizeInput(string) {
    if (!string) return '';
    return String(string)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}