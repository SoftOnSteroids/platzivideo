'use strict'

import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const playPauseButton = document.querySelector('button.playPause')
const muteUnmuteButton = document.querySelector('button.unmute')

const mediaPlayer = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
})

video.addEventListener('playing', (event) => {
  playPauseButtonText()
})
video.addEventListener('pause', (event) => {
  playPauseButtonText()
})
video.addEventListener('volumechange', (event) => {
  muteUnmuteButtonText()
})

function playPauseButtonText() {
  video.paused
    ? (playPauseButton.innerHTML = 'Play')
    : (playPauseButton.innerHTML = 'Pause')
}

function muteUnmuteButtonText() {
  video.muted
    ? (muteUnmuteButton.innerHTML = 'Unmute')
    : (muteUnmuteButton.innerHTML = 'Mute')
}

function mediaPlayPause() {
  mediaPlayer.playPause()
}

playPauseButton.onclick = () => {
  mediaPlayPause()
  if (!video.paused) {
    mediaPlayer.unmute()
  }
}

video.onclick = () => {
  mediaPlayPause()
  if (!video.paused) {
    mediaPlayer.unmute()
  }
}

muteUnmuteButton.onclick = () => {
  mediaPlayer.muteUnmute()
}
