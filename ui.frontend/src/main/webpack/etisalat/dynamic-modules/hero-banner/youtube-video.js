/* eslint-disable */
let videoList = document.querySelectorAll(".video-item div");

export const YOU_TUBE_VIDEO_PLAYER = () => {
  let videoID = document.querySelector("#youTubeVideoPlayer");
  let tag = document.createElement("script");
  let firstScriptTag = document.getElementsByTagName("script")[0];

  tag.src = "https://www.youtube.com/iframe_api";
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;

  window.onYouTubeIframeAPIReady = function () {
    player = new YT.Player("youTubeVideoPlayer", {
      width: "100%",
      videoId: videoID.dataset.videoid.split("/").pop(),
      playerVars: {
        autoplay: 1,
        playsinline: 1,
        loop: 1,
        rel: 0,
        controls: 0,
        showinfo: 0,
        disablekb: 1,
        modestbranding: 1,
        widgetid: 0,
      },
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
  }
};