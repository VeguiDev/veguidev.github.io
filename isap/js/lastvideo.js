(function () {
  // Script created by VeguiDev for Isap

  var apiKey = "AIzaSyCYAChBtgv8L590o6VUgigemq1m_0NVMzY",
    channelId = "UCrnSJ4cyGfinu2I3Cvu4I5g",
    videoTitleE = document.getElementById("lastvideo-title"),
    videoLinkE = document.getElementById("lastvideo-link");

  async function getLastVideo() {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;
    let response = await fetch(url);
    let data = await response.json();

    let videoId = data.items[0].id.videoId;
    let videoTitle = data.items[0].snippet.title;

    let videoTitleShort = videoTitle.substring(0, 60);

    videoLinkE.href = `https://www.youtube.com/watch?v=${videoId}`;
    videoTitleE.innerHTML =
      videoTitle.length > 60 ? videoTitleShort + "..." : videoTitle;
  }

  //   Execute
  try {
    getLastVideo();
  } catch (e) {
    console.error(e);
  }
})();
