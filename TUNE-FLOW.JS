const songs = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
];

const audio = document.getElementById("audio");

function playSong(index) {
    audio.src = songs[index];
    audio.play();
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}
