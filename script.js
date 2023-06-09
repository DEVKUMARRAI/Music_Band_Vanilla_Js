window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-inp="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-inp="${e.keyCode}"]`)
    if (audio == null) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(()=>{key.classList.remove('playing')},200)
    
})