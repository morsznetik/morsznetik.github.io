document.getElementById('about-me').addEventListener('click', function() {
    this.classList.add('pop-animation');
    this.addEventListener('animationend', function() {
        this.classList.remove('pop-animation');
    }, { once: true });
});
document.addEventListener("DOMContentLoaded", function() {
    var quotes = [
        "bingo bingo baby <span class='special-love-text'>I love you</span> ain't that crazy!?!?",
    ];

    var quoteElement = document.querySelector(".quote-of-the-day");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = '"' + quotes[randomIndex] + '"'
});
