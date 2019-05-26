import { secondsToHHMMSS } from '../util/time_formatting';

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
      currentTime: document.querySelector('span#current-time'),
      videoDuration: document.querySelector('span#video-duration'),
      playPause: document.querySelector('button#play-pause'),
      muteUnmute: document.querySelector('button#mute-unmute'),
      volumeSlider: document.querySelector('#volume-slider'),
    };
  }

  setupControls() {
    this.video.addEventListener('contextmenu', (evt) => {
      evt.preventDefault();
    });

    const {
      progressBar,
      currentTime,
      videoDuration,
      playPause,
      muteUnmute,
      volumeSlider,
    } = this.playerControls;

    progressBar.max = this.video.duration;
    this.video.addEventListener('timeupdate', () => {
      progressBar.value = this.video.currentTime;
      progressBar.textContent = secondsToHHMMSS(this.video.currentTime);
    });

    videoDuration.textContent = secondsToHHMMSS(this.video.duration);
    this.video.addEventListener('timeupdate', () => {
      currentTime.textContent = secondsToHHMMSS(this.video.currentTime);
    });

    this.video.addEventListener('click', this.handlePlayPause);
    playPause.addEventListener('click', this.handlePlayPause);

    muteUnmute.addEventListener('click', this.handleMuteUnmute);
    volumeSlider.addEventListener('input', (evt) => {
      this.video.volume = evt.target.value;
    });
    this.video.addEventListener('volumechange', () => {
      volumeSlider.value = this.video.volume;
    });

    
    document.addEventListener('keydown', this.handleKeyboardShortcuts);
  }

  handlePlayPause() {
    const { playPause } = this.playerControls;
    
    if (this.video.paused) {
      this.video.play();
      playPause.textContent = 'Pause';
    } else {
      this.video.pause();
      playPause.textContent = 'Play';
    }
  }

  handleMuteUnmute() {
    const { muteUnmute } = this.playerControls;
    
    if (this.video.muted) {
      this.video.muted = false;
      muteUnmute.textContent = 'Mute';
    } else {
      this.video.muted = true;
      muteUnmute.textContent = 'Unmute';
    }
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

      case '-':
        if (!evt.ctrlKey && !evt.metaKey) {
          if (this.video.volume < 0.1) this.video.volume = 0;
          else this.video.volume -= 0.1;
        }
        break;

      case '=':
        if (!evt.ctrlKey && !evt.metaKey) {
          if (this.video.volume > 0.9) this.video.volume = 1;
          else this.video.volume += 0.1;
        }
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
