console.log("Welcome to spotify");
// 2.Initialize the variables:
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myTracker = document.getElementById('tracker');
let myGif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// 1
let myMusic = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" }
]
// 7
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = myMusic[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = myMusic[i].songName;
})



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        myGif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        myGif.style.opacity = 0;

    }
})
// 4.Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    // 5.update seekbar
    let trackerProgress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(trackerProgress);
    myTracker.value = trackerProgress;
})
// 6.Changing the audio with timing
myTracker.addEventListener('change', () => {
    audioElement.currentTime = myTracker.value * audioElement.duration / 100;
})
// 8.1
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })
}
// 8.2
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
       
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText=myMusic[songIndex].songName
        audioElement.currentTime = '0';
        audioElement.play();
        myGif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = o;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=myMusic[songIndex].songName
    audioElement.currentTime = '0';
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = o;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=myMusic[songIndex].songName
    audioElement.currentTime = '0';
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

