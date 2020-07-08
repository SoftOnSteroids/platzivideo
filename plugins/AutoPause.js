'use strict'

/* function AutoPause() {
  this.threshold = 0.25
  this.handleIntersection = this.handleIntersection.bind(this)
  this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
}

AutoPause.prototype.run = function(player) {
  this.player = player
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold,
  })

  observer.observe(player.media)

  document.addEventListener('visibilitychange', this.handleVisibilityChange)
}
AutoPause.prototype.handleIntersection = function(entries) {
  const entry = entries[0]
  entry.isIntersecting ? this.player.play() : this.player.pause()
}

AutoPause.prototype.handleVisibilityChange = function() {
  if(document.visibilityState === 'hidden') {
    this.playerWasPaused = this.player.media.paused
    this.player.pause()
  } else if (this.playerWasPaused === false) {
    this.player.play()
  }
}

export default AutoPause */

class AutoPause {
  constructor() {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player) {
    this.player = player
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    })

    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  }

  handleIntersection(entries) {
    const entry = entries[0]
    entry.isIntersecting ? this.player.play() : this.player.pause()
  }

  handleVisibilityChange() {
    if(document.visibilityState === 'hidden') {
      this.playerWasPaused = this.player.media.paused
      this.player.pause()
    } else if (this.playerWasPaused === false) {
      this.player.play()
    }
  }
}

export default AutoPause