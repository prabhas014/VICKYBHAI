

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
