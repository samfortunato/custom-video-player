import VideoPlayer from './video_player';

document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = new VideoPlayer();

  if (videoPlayer.video.readyState >= 1) {
    videoPlayer.setupControls();
  }
});
