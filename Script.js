window.addEventListener("keydown", playsound);

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("play");
    setTimeout(() => {
        key.classList.remove("play");
    }, 400);
}