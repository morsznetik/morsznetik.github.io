function updateCESTTime() {
    const cestDisplay = document.getElementById('cest-time');
    if (!cestDisplay) return;

    // Get current time in UTC
    const now = new Date();

    // Convert to CEST by adding the CEST offset (UTC+2)
    const cestOffset = 2 * 60 * 60 * 1000; // CEST is UTC+2 hours in milliseconds
    const cestTime = new Date(now.getTime() + cestOffset);

    // Format the time in 24-hour format
    const hours24 = String(cestTime.getUTCHours()).padStart(2, '0');
    const minutes = String(cestTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(cestTime.getUTCSeconds()).padStart(2, '0');

    // Format the time in 12-hour format
    let hours12 = cestTime.getUTCHours();
    const period = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
    const formattedHours12 = String(hours12).padStart(2, '0');

    // Update the display
    cestDisplay.textContent = `${hours24}:${minutes}:${seconds} · ${formattedHours12}:${minutes}:${seconds} ${period}`;
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

