document.getElementById('enter-btn').addEventListener('click', function() {
    // Hide the entry overlay
    document.getElementById('entry-overlay').style.display = 'none';
    
    // Show the main content
    document.getElementById('main-content').style.display = 'block';

    // Create the YouTube iframe and append it to audio-container
    // We use a tiny iframe so it doesn't disturb the crazy layout, but it plays the audio
    const iframe = document.createElement('iframe');
    iframe.width = "1";
    iframe.height = "1";
    iframe.src = "https://www.youtube.com/embed/qk2WMmiiVFE?autoplay=1&loop=1&playlist=qk2WMmiiVFE";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay";
    iframe.style.position = "absolute";
    iframe.style.top = "-9999px";
    iframe.style.left = "-9999px";
    
    document.getElementById('audio-container').appendChild(iframe);
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
