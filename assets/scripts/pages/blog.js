document.addEventListener("DOMContentLoaded", function() {
    const sidebarList = document.getElementById("sidebar-list");
    const sections = document.querySelectorAll(".blog-section");
    let sidebarContent = "";

    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h2").innerText;
        sidebarContent += `<li><a href="#${sectionId}">${sectionTitle}</a></li>`;
    });

    sidebarList.innerHTML = sidebarContent;
});
