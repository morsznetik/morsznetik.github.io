function updateCESTTime() {
    const cestDisplay = document.getElementById('cest-time');
    if (!cestDisplay) return;

    // Get current time in UTC
    const now = new Date();

    // Convert to CEST by adding 2 hours to UTC time
    const cestOffset = 2 * 60; // CEST is UTC+2
    const cestTime = new Date(now.getTime() + cestOffset * 60 * 1000);

    // Format the time in 24-hour format
    const hours = String(cestTime.getUTCHours()).padStart(2, '0');
    const minutes = String(cestTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(cestTime.getUTCSeconds()).padStart(2, '0');

    cestDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCESTTime, 1000);

updateCESTTime();

document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "bingo bingo baby<span class='special-love-text'> I love you </span>ain't that crazy!?!?",
        "it ain't stupid if it works",
        "<span class='trans-flag-text'>trans lives matter :3</span>",
    ];

    var quoteElement = document.querySelector(".quote-of-the-day");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = '"' + quotes[randomIndex] + '"'
});

