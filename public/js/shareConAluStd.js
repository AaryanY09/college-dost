const socket = io();

socket.on("new-shareConAlu", () => {

    location.reload();

});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("contentContainer");

    // Initialize scrolling visibility animations for default loaded cards
    animateExistingCards();

    // Setup real-time Socket.io listeners safely
    if (typeof io !== 'undefined') {
        const socket = io();

        // Adjust 'newAlumniContent' to whatever specific event your backend triggers
        socket.on("newAlumniContent", (data) => {
            createNewCard(data);
        });
    }
});

/**
 * Iterates through existing server-side elements to slide them into position elegantly.
 */
function animateExistingCards() {
    const cards = document.querySelectorAll(".content-card");
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered calculation base delay
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 80); 
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => cardObserver.observe(card));
}

/**
 * Creates, formats, and displays real-time items sent from the socket stream instantly.
 */
function createNewCard(data) {
    const container = document.getElementById("contentContainer");
    if (!container) return;

    const card = document.createElement("div");
    card.className = "content-card";
    
    // Setup file section block conditionally safely
    let fileSectionHTML = '';
    if (data.file_url) {
        fileSectionHTML = `
            <div class="file-section">
                <a href="${data.file_url}" download class="download-btn">
                    <span class="dl-icon">⬇</span> Download Resource
                </a>
            </div>
        `;
    }

    // Notice that class="content-message" will naturally pick up our pre-wrap layout
    card.innerHTML = `
        <h3 class="content-title">
            <span class="pin-icon">📌</span> ${data.title || 'Untitled Update'}
        </h3>
        <p class="content-message">${data.message || ''}</p>
        <div class="content-meta">
            <span class="meta-item">👨‍🏫 ${data.alumni_name || 'Alumnus'}</span>
            <span class="meta-item">📅 ${data.created_at || 'Just Now'}</span>
        </div>
        ${fileSectionHTML}
    `;

    // Drop new data at the top of the feed
    container.insertBefore(card, container.firstChild);

    // Immediate micro-render delay for smooth entrance transition
    requestAnimationFrame(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });
}