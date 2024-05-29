function is12HourLocale() {
    // Get user's locale
    const userLocale = navigator.language;

    // Check if the user's locale prefers 12-hour clock format
    const formatter = new Intl.DateTimeFormat(userLocale, { hour: 'numeric' });
    const options = formatter.resolvedOptions();
    return options.hour12;
}

function updateTime() {
    const cestDisplay = document.getElementById('cest-time');
    const cestPeriod = document.getElementById('cest-period');

    // Get current time in UTC
    const now = new Date();

    // Convert to CEST by adding the CEST offset (UTC+2)
    const cestOffset = 2 * 60 * 60 * 1000; // CEST is UTC+2 hours in milliseconds
    const cestTime = new Date(now.getTime() + cestOffset);

    // Format the time in 24-hour format
    const hours24 = String(cestTime.getUTCHours()).padStart(2, '0');
    const minutes = String(cestTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(cestTime.getUTCSeconds()).padStart(2, '0');

    // Format the time in 12-hour format if user locale is 12-hour
    if (is12HourLocale()) {
        let hours12 = cestTime.getUTCHours();
        const period = hours12 >= 12 ? 'PM' : 'AM';
        hours12 = hours12 % 12;
        hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
        const formattedHours12 = String(hours12).padStart(2, '0');

        // Update the display
        cestDisplay.textContent = `${formattedHours12}:${minutes}:${seconds}`;
        cestPeriod.textContent = period;

    } else {
        // Update the display in 24-hour format
        cestDisplay.textContent = `${hours24}:${minutes}:${seconds}`;

        // Hide the 12-hour period
        cestPeriod.style.display = 'none';
    }
}

function updateQuotes() {
    let quotes = [
        "bingo bingo baby<span class='love-text love-glow'> I love you </span>ain't that crazy!?!?",
        "it ain't stupid if it works",
        "<span class='trans-text'>trans lives matter :3 !!</span>",
        "im not lazy, im on energy-saving mode",
        "im not short, just fun-sized :3"
    ];

    let quoteElement = document.querySelector(".daily-quote");

    let randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = '"' + quotes[randomIndex] + '"'
}

async function updateLastUpdateWidget() {
    const lastUpdateElement = document.getElementById('last-update');
    const githubRepo = 'morsznetik/morsznetik.github.io';
    const githubApiUrl = `https://api.github.com/repos/${githubRepo}/commits?per_page=1`;

    try {
        const response = await Promise.race([
            fetch(githubApiUrl),
            new Promise((_, reject) => setTimeout(() =>
                reject(new Error("Timeout occurred while fetching data from GitHub.")), 1000))
        ]);

        const commits = await response.json();
        const lastUpdateTimestamp = parseInt(lastUpdateElement.getAttribute('data-timestamp'), 10) * 1000;
        const currentTime = new Date();
        const elapsed = commits && commits.length > 0 ? currentTime - new Date(commits[0].commit.author.date).getTime() : currentTime - lastUpdateTimestamp;

        lastUpdateElement.innerText = formatTimeAgo(elapsed);
    } catch (error) {
        console.error("Error fetching data from GitHub:", error);
        const lastUpdateTimestamp = parseInt(lastUpdateElement.getAttribute('data-timestamp'), 10) * 1000;
        const currentTime = new Date();
        const elapsed = currentTime - lastUpdateTimestamp;

        lastUpdateElement.innerText = formatTimeAgo(elapsed);
        throw error;
    }
}



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


document.addEventListener("DOMContentLoaded", async function() {
    updateQuotes();
    await updateLastUpdateWidget();

    setInterval(updateTime, 1000);
    updateTime();
    console.log(`%cfeel free to judge my terrible code :3`, "color: red; font-weight: bold; font-size: 32px;");
});
