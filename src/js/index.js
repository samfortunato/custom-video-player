import VideoPlayer from './video_player';

document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = new VideoPlayer();

  videoPlayer.setupControls();
});
