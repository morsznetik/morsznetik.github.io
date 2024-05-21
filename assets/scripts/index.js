document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "bingo bingo baby<span class='special-love-text'> I love you </span>ain't that crazy!?!?",
    ];

    var quoteElement = document.querySelector(".quote-of-the-day");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = '"' + quotes[randomIndex] + '"'
});
