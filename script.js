function playVideo(videoUrl) {
    var videoPlayer = document.createElement('video');
    videoPlayer.setAttribute('src', videoUrl);
    videoPlayer.setAttribute('controls', 'true');
    videoPlayer.setAttribute('autoplay', 'true');
    
    var videoContainer = document.createElement('div');
    videoContainer.appendChild(videoPlayer);
    
    var mainSection = document.querySelector('main section');
    mainSection.innerHTML = '';
    mainSection.appendChild(videoContainer);
  }