const audio = document.getElementById('myAudio');
document.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        console.log('Audio unmuted');
    }
});
