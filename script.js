window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-inp="${e.keyCode}"]`)
    if (audio == null) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

})