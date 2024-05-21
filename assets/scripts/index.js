document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "bingo bingo baby<span class='special-love-text'> I love you </span>ain't that crazy!?!?",
        "it ain't stupid if it works",
        "<span class='trans-flag-text'>trans lives matter</span>"
    ];

    var quoteElement = document.querySelector(".quote-of-the-day");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = '"' + quotes[randomIndex] + '"'
});
