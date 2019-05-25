class VideoPlayer {
  constructor() {
    this.video = document.querySelector('#video-player');

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleMuteUnmute = this.handleMuteUnmute.bind(this);
  }

  get playerControls() {
    return {
      playPause: document.querySelector('button#play-pause'),
      muteUnmute: document.querySelector('button#mute-unmute'),
    };
  }

  setupControls() {
    this.video.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    this.playerControls.playPause.addEventListener('click', this.handlePlayPause);
    this.playerControls.muteUnmute.addEventListener('click', this.handleMuteUnmute);
  }

  handlePlayPause() {
    if (this.video.paused) this.video.play();
    else this.video.pause();
  }

  handleMuteUnmute() {
    if (this.video.muted) this.video.volume = 1;
    else this.video.volume = 0;
  }
}

export default VideoPlayer;
