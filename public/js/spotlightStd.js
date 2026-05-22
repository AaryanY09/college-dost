const socket = io();

socket.on("new-spotlight", () => {

    location.reload();

});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('content-container');
    const toastContainer = document.getElementById('toast-container');

    // 1. SMOOTH ANIMATION: Reveal cards gracefully as the user scrolls
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Introduce an elegant staggered rendering offset for visible items
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    // Attach scroll observers to all static server-rendered cards
    document.querySelectorAll('.content-card').forEach(card => {
        revealOnScroll.observe(card);
    });

    // 2. REAL-TIME INTERACTION: Handle websocket events cleanly
    const socket = io();

    socket.on('new_spotlight', (data) => {
        // Remove empty state placeholder graphics if they exist
        const emptyState = document.querySelector('.no-content');
        if (emptyState) emptyState.remove();

        // Build a fresh DOM tree structure manually to prevent raw markup injection vulnerabilities
        const card = document.createElement('div');
        card.className = 'content-card';

        const titleEl = document.createElement('h3');
        titleEl.className = 'content-title';
        titleEl.textContent = `📌 ${data.title}`;
        card.appendChild(titleEl);

        const msgEl = document.createElement('p');
        msgEl.className = 'content-message';
        msgEl.textContent = data.message; // String binding guarantees text format compliance
        card.appendChild(msgEl);

        const metaEl = document.createElement('div');
        metaEl.className = 'content-meta';
        metaEl.innerHTML = `
            <span>👨‍🏫 ${data.alumni_name}</span>
            <span>📅 ${data.created_at || 'Just now'}</span>
        `;
        card.appendChild(metaEl);

        if (data.file_url) {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-section';
            fileDiv.innerHTML = `
                <a href="${data.file_url}" download class="download-btn">
                    ⬇ Download Resource
                </a>
            `;
            card.appendChild(fileDiv);
        }

        // Prepend the new item smoothly at the top of the feed
        container.insertBefore(card, container.firstChild);

        // Instantly target it for hardware acceleration slide-in rendering
        requestAnimationFrame(() => {
            card.classList.add('reveal');
        });

        // Trigger a temporary screen notification alert banner
        showToast(`New spotlight shared by ${data.alumni_name}!`);
    });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
});