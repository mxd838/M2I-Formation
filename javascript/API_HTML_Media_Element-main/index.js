// Elements
const videoPlayer = document.querySelector('video')
const playpauseBtn = document.getElementById('playpause')
const stopBtn = document.getElementById('stop')
const speedControl = document.getElementById('speed')
const speedIndicator = document.getElementById('speedIndicator')
const progressBar = document.getElementById('progress')

// Functions
const playPause = () => {

    if (videoPlayer.paused){
        videoPlayer.play()
        playpauseBtn.innerHTML = 'Pause'
    } else {
        videoPlayer.pause()
        playpauseBtn.innerHTML = 'Play'
    }
}

const stopVideo = () => {

    videoPlayer.pause()
    videoPlayer.currentTime = 0
}


const controlSpeed = (e) => {
    speedIndicator.innerText = `x ${e.target.value}`
    videoPlayer.playbackRate = e.target.value
}

const showProgress = () => {

    if(videoPlayer.currentTime === videoPlayer.duration){
        stopVideo()
        progressBar.value = 0
    }
  
    progressBar.value = (videoPlayer.currentTime / videoPlayer.duration) * 100


    console.log('Current time' + videoPlayer.currentTime)
    console.log('Speed rate ' + videoPlayer.defaultPlaybackRate)
    

}

// Event listeners
playpauseBtn.addEventListener('click', playPause)
stopBtn.addEventListener('click', stopVideo)
speedControl.addEventListener('input', controlSpeed)
videoPlayer.addEventListener('timeupdate', showProgress)

