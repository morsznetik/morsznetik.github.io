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
        sidebarContent += `<li><a href="#${sectionId}">${sectionTitle}</a></li>`;
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

document.addEventListener("DOMContentLoaded", function() {
    populateSidebar();
    updateTimeAgo();
});
