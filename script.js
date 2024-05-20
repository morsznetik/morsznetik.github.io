document.getElementById('about-me').addEventListener('click', function() {
    this.classList.add('pop-animation');
    this.addEventListener('animationend', function() {
        this.classList.remove('pop-animation');
    }, { once: true });
});
