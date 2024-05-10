window.onload = () => {
  let all = document.getElementsByClassName("gallery");
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
          else {
            document.webkitCancelFullScreen();
          }
        }
        else {
          if (i.requestFullscreen) {
            i.requestFullscreen();
          } else {
            i.webkitRequestFullScreen();
          }
        }
      };
    }
  }
};