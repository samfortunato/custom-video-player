class VideoPlayer {
  constructor() {
    this.video = document.querySelector('#video-player');

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleMuteUnmute = this.handleMuteUnmute.bind(this);
    this.handleKeyboardShortcuts = this.handleKeyboardShortcuts.bind(this);
  }

  get playerControls() {
    return {
      progressBar: document.querySelector('progress#progress-bar'),
      playPause: document.querySelector('button#play-pause'),
      muteUnmute: document.querySelector('button#mute-unmute'),
    };
  }

  setupControls() {
    this.video.addEventListener('contextmenu', (evt) => {
      evt.preventDefault();
    });

    this.video.addEventListener('click', this.handlePlayPause);
    this.playerControls.playPause.addEventListener('click', this.handlePlayPause);
    this.playerControls.muteUnmute.addEventListener('click', this.handleMuteUnmute);

    document.addEventListener('keydown', this.handleKeyboardShortcuts);
  }

  handlePlayPause() {
    if (this.video.paused) this.video.play();
    else this.video.pause();
  }

  handleMuteUnmute() {
    if (this.video.muted) this.video.muted = false;
    else this.video.muted = true;
  }

  handleKeyboardShortcuts(evt) {
    switch (evt.key) {
      case ' ':
      case 'k':
        this.handlePlayPause();
        break;

      case 'm':
        this.handleMuteUnmute();
        break;

      case 'j':
        this.video.currentTime -= 10;
        break;

      case 'l':
        this.video.currentTime += 10;
        break;

      case ',':
        this.video.currentTime -= 5;
        break;

      case '.':
        this.video.currentTime += 5;
        break;

      case 'ArrowLeft':
        this.video.currentTime -= 1;
        break;

      case 'ArrowRight':
        this.video.currentTime += 1;
        break;

      default:
        break;
    }
  }
}

export default VideoPlayer;
