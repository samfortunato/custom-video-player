import VideoPlayer from './video_player/video_player';

const videoPlayer = new VideoPlayer();

videoPlayer.video.addEventListener('loadeddata', () => {
  videoPlayer.setupControls();
});
