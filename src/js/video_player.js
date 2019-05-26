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

    const { playPause, muteUnmute, progressBar } = this.playerControls;

    this.video.addEventListener('click', this.handlePlayPause);
    playPause.addEventListener('click', this.handlePlayPause);
    muteUnmute.addEventListener('click', this.handleMuteUnmute);

    progressBar.max = this.video.duration;
    this.video.addEventListener('timeupdate', () => {
      progressBar.value = this.video.currentTime;
      progressBar.textContent = this.video.currentTime;
    });
    
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

  handleLoop() {
    if (this.video.loop) this.video.loop = false;
    else this.video.loop = true;
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

      case '[':
        this.video.playbackRate -= 0.1;
        break;

      case ']':
        this.video.playbackRate += 0.1;
        break;

      case 'o':
        this.handleLoop();
        break;

      default:
        break;
    }
  }
}

export default VideoPlayer;
