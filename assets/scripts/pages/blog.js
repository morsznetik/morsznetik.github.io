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
});
