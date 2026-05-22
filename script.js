// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1',
    width: '1',
    videoId: 'qk2WMmiiVFE',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'loop': 1,
      'playlist': 'qk2WMmiiVFE'
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Start playing muted so it buffers immediately and browser allows it
  event.target.mute();
  event.target.playVideo();
}

// Unmute and play on first click anywhere
window.addEventListener('click', function handleFirstClick() {
    if (player && typeof player.unMute === 'function') {
        player.unMute();
        player.setVolume(100);
        player.playVideo(); // Force play in case it was paused
        const banner = document.getElementById('click-banner');
        if(banner) banner.style.display = 'none';
        
        // Remove listener only after it successfully plays
        window.removeEventListener('click', handleFirstClick);
    }
});

// Add some random movement to the dog gifs for extra chaos
setInterval(() => {
    const gifs = document.querySelectorAll('.dog-gif');
    gifs.forEach(gif => {
        const randomX = Math.floor(Math.random() * 20) - 10;
        const randomY = Math.floor(Math.random() * 20) - 10;
        // Apply a subtle translate on top of existing animations
        gif.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}, 500);
