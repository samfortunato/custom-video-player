import VideoPlayer from './video_player/video_player';

const videoPlayer = new VideoPlayer();

if (videoPlayer.video.readyState >= 1) {
  videoPlayer.setupControls();
} else {
  videoPlayer.video.addEventListener('loadedmetadata', () => {
    videoPlayer.setupControls();
  });
}
