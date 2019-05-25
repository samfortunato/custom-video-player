class VideoPlayer {
  constructor() {
    this.video = document.querySelector('#video-player');
  }

  get playerControls() {
    return {
      playPause: document.querySelector('button#play-pause')
    };
  }

  setupControls() {
    this.video.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    this.playerControls.playPause.addEventListener('click', () => {
      if (this.video.paused) this.video.play();
      else this.video.pause();
    });
  }
}

export default VideoPlayer;
