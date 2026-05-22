const socket = io();

socket.on("new-culture", () => {

    location.reload();

});


document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('content-container');
    const toastWrapper = document.getElementById('toast-wrapper');

    // 1. DYNAMIC ENTRY MOVEMENT: Slide blocks up smoothly when entering viewport
    const blockScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply a graceful timed waterfall delay stagger effect for loaded blocks
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                }, index * 75);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.02 });

    // Track existing items compiled out of initial template engine context
    document.querySelectorAll('.content-card').forEach(card => {
        blockScrollObserver.observe(card);
    });

    // 2. LIVE REAL-TIME FEED PROCESSING: Append socket updates directly into client frame
    const socket = io();

    socket.on('new_culture', (data) => {
        // Clear background placeholder visuals if feed area is empty
        const fallbackMessage = document.querySelector('.empty-state-box');
        if (fallbackMessage) fallbackMessage.remove();

        // Build a fresh secure card architecture directly via DOM Methods 
        // to block code formatting injection vulnerabilities
        const newCard = document.createElement('div');
        newCard.className = 'content-card';

        const titleHeader = document.createElement('h3');
        titleHeader.className = 'content-title';
        titleHeader.textContent = `📌 ${data.title}`;
        newCard.appendChild(titleHeader);

        const textMessage = document.createElement('p');
        textMessage.className = 'content-message';
        textMessage.textContent = data.message; // Text binding leaves native return spaces uncorrupted
        newCard.appendChild(textMessage);

        const userMetaData = document.createElement('div');
        userMetaData.className = 'content-meta';
        userMetaData.innerHTML = `
            <span>👨‍🏫 ${data.alumni_name}</span>
            <span>📅 ${data.created_at || 'Just now'}</span>
        `;
        newCard.appendChild(userMetaData);

        if (data.file_url) {
            const fileWrapper = document.createElement('div');
            fileWrapper.className = 'file-section';
            fileWrapper.innerHTML = `
                <a href="${data.file_url}" download class="download-btn">
                    ⬇ Download Resource
                </a>
            `;
            newCard.appendChild(fileWrapper);
        }

        // Drop the new post at the absolute peak of the container layout
        feedContainer.insertBefore(newCard, feedContainer.firstChild);

        // Instantly switch frame timeline vectors for immediate acceleration presentation rendering
        requestAnimationFrame(() => {
            newCard.classList.add('reveal-active');
        });

        // Push dynamic slide notice alert flag out 
        dispatchToastNotification(`New culture update shared by ${data.alumni_name}!`);
    });

    // Helper utility for flashing action alert cards inside frame space boundaries
    function dispatchToastNotification(noticeText) {
        const toastNode = document.createElement('div');
        toastNode.className = 'live-alert-toast';
        toastNode.textContent = noticeText;
        toastWrapper.appendChild(toastNode);

        // Smoothly fade out toast notice frame parameters automatically after viewing threshold limits
        setTimeout(() => {
            toastNode.style.opacity = '0';
            toastNode.style.transform = 'translateX(60px) scale(0.9)';
            toastNode.style.transition = 'all 0.35s ease';
            setTimeout(() => toastNode.remove(), 350);
        }, 4500);
    }
});