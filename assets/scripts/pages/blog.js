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


document.addEventListener("DOMContentLoaded", function() {
    const sidebarList = document.getElementById("sidebar-list");
    const sections = document.querySelectorAll(".blog-container");
    let sidebarContent = "";

    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h1").innerText;
        sidebarContent += `<li><a href="#${sectionId}">${sectionTitle}</a></li>`;
    });

    sidebarList.innerHTML = sidebarContent;

    // Placeholder for formatTimeAgo function call
    const timeAgoElements = document.querySelectorAll('.time-ago');
    timeAgoElements.forEach(element => {
        const timestamp = parseInt(element.getAttribute('data-timestamp'));
        element.innerText = formatTimeAgo(timestamp);
    });
});