function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00d2d3'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Changed from 5000 to 3000 to match animation duration
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function showChoices() {
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('twinChoices').style.display = 'flex';
    createConfetti();
}

function showMessage(twin) {
    document.getElementById('twinChoices').style.display = 'none';
    if (twin === 'drey') {
        document.getElementById('dreyMessage').style.display = 'block';
    } else {
        document.getElementById('rayMessage').style.display = 'block';
    }
    createConfetti();
}

function reset() {
    document.getElementById('dreyMessage').style.display = 'none';
    document.getElementById('rayMessage').style.display = 'none';
    document.getElementById('twinChoices').style.display = 'flex';
}