// Elements
const videoPlayer = document.querySelector('video')
const playpauseBtn = document.getElementById('playpause')
const stopBtn = document.getElementById('stop')
const speedControl = document.getElementById('speed')
const speedIndicator = document.getElementById('speedIndicator')
const progressBar = document.getElementById('progress')
// const muteBtn = document.getElementById('mute')
// const volIncBtn = document.getElementById('volinc')
// const volDecBtn = document.getElementById('voldec')
// const fullScreenBtn = document.getElementById('fs')


// Make the progress bar advance / video playing
// -> make it easier to develop the control of the speed rate

// Functions
const playPause = () => {

    if (videoPlayer.paused){
        videoPlayer.play()
    } else {
        videoPlayer.pause()
    }
}

const stopVideo = () => {

    videoPlayer.pause()
    videoPlayer.currentTime = 0
}


const controlSpeed = (e) => {
    speedIndicator.innerText = `x ${e.target.value}`
    videoPlayer.defaultPlaybackRate = e.target.value
    // console.log('Current time' + videoPlayer.currentTime)
    // console.log('Speed rate ' + videoPlayer.defaultPlaybackRate)
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
// muteBtn.addEventListener('click', muteVideo)
// volIncBtn.addEventListener('click', increaseVolume)
// volDecBtn.addEventListener('click', decreaseVolume)
// fullScreenBtn.addEventListener('click', goFullScreen)
