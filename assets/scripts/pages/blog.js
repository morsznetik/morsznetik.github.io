function formatTimeAgo(elapsed) {
    const elapsedHours = Math.floor(elapsed / (1000 * 60 * 60));
    const elapsedDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    if (elapsedHours < 1) {
        return "just now";
    } else if (elapsedHours < 24) {
        return `${elapsedHours} hour${elapsedHours > 1 ? 's' : ''} ago`;
    } else if (elapsedDays === 1) {
        return "1 day ago";
    } else {
        return `${elapsedDays} days ago`;
    }
}

function generateSidebarContent() {
    const sections = document.querySelectorAll(".blog-container");
    let sidebarContent = "";

    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h1").innerText;
        sidebarContent += `<li><a href="#${sectionId}" tabindex="0">${sectionTitle}</a></li>`;
    });

    return sidebarContent;
}

function populateSidebar() {
    const sidebarList = document.getElementById("sidebar-list");
    sidebarList.innerHTML = generateSidebarContent();
}

function updateTimeAgo() {
    const timeAgoElements = document.querySelectorAll('.time-ago');
    timeAgoElements.forEach(element => {
        const timestamp = parseInt(element.getAttribute('data-timestamp'), 10) * 1000;
        const currentTime = new Date();
        const elapsed = currentTime - timestamp;
        element.innerText = formatTimeAgo(elapsed);
    });
}

function expandImage(event) {
    const modal = document.getElementById("image-modal");
    const modalContent = modal.querySelector(".modal-content");
    const modalImg = document.getElementById("expanded-img");

    const img = event.target;
    const rect = img.getBoundingClientRect();

    modal.style.display = "block";
    modalImg.src = img.src;

    modalImg.style.position = "absolute";
    modalImg.style.top = `${rect.top}px`;
    modalImg.style.left = `${rect.left}px`;
    modalImg.style.width = `${rect.width}px`;
    modalImg.style.height = `${rect.height}px`;
    modalImg.style.transition = "transform 0.2s ease-in-out, top 0.2s ease-in-out, left 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out";

    modalImg.offsetHeight;

    const targetWidth = Math.min(window.innerWidth * 0.8, modalImg.naturalWidth);
    const targetHeight = targetWidth * modalImg.naturalHeight / modalImg.naturalWidth;

    const targetTop = (window.innerHeight - targetHeight) / 2;
    const targetLeft = (window.innerWidth - targetWidth) / 2;

    modalImg.style.top = `${targetTop}px`;
    modalImg.style.left = `${targetLeft}px`;
    modalImg.style.width = `${targetWidth}px`;
    modalImg.style.height = `${targetHeight}px`;
    modalImg.style.transform = "translate(0, 0)";

    const closeModal = (e) => {
        if (e.target === modal || e.target === modalImg || e.target === modalContent) {
            modalImg.style.top = `${rect.top}px`;
            modalImg.style.left = `${rect.left}px`;
            modalImg.style.width = `${rect.width}px`;
            modalImg.style.height = `${rect.height}px`;

            setTimeout(() => {
                modal.style.display = "none";
                modalImg.style.position = "";
                modalImg.style.top = "";
                modalImg.style.left = "";
                modalImg.style.width = "";
                modalImg.style.height = "";
                modalImg.style.transition = "";
                modal.removeEventListener('click', closeModal);
                window.removeEventListener('wheel', closeModal);
            }, 200);
        }
    };

    modal.addEventListener('click', closeModal);
    window.addEventListener('wheel', closeModal);
}

document.addEventListener("DOMContentLoaded", function() {
    populateSidebar();
    updateTimeAgo();

    document.querySelectorAll('.expand-img').forEach(image => {
        image.addEventListener('click', expandImage);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 100,
                behavior: 'smooth'
            });
        });
    });
});
