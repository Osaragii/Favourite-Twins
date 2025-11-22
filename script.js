// DOM references
const initialScreen = document.getElementById('initialScreen');
const twinChoices   = document.getElementById('twinChoices');
const dreyMessage   = document.getElementById('dreyMessage');
const rayMessage    = document.getElementById('rayMessage');

// Confetti Settings
const CONFETTI_COLORS  = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#00d2d3'];
const CONFETTI_COUNT   = 100;  // how many pieces
const CONFETTI_STAGGER = 30;   // ms between each piece

// Confetti Functions
function createConfetti() {
    // Clear existing confetti so it doesn't pile up
    document.querySelectorAll('.confetti').forEach(el => el.remove());

    for (let i = 0; i < CONFETTI_COUNT; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            // Random horizontal position
            confetti.style.left = Math.random() * 100 + 'vw';

            // Random color
            confetti.style.background = CONFETTI_COLORS[
                Math.floor(Math.random() * CONFETTI_COLORS.length)
            ];
            // delay
            const delay    = Math.random() * 3;
            const duration = 2 + Math.random() * 2;

            confetti.style.animationDelay    = delay + 's';
            confetti.style.animationDuration = duration + 's';

            document.body.appendChild(confetti);

            // Remove after it's actually done animating
            setTimeout(() => confetti.remove(), (delay + duration) * 1000 + 100);
        }, i * CONFETTI_STAGGER);
    }
}

// Screen Flow Functions
function showChoices() {
    initialScreen.style.display = 'none';
    twinChoices.style.display   = 'flex';
    dreyMessage.style.display   = 'none';
    rayMessage.style.display    = 'none';

    createConfetti();
}

function showMessage(twin) {
    twinChoices.style.display = 'none';
    dreyMessage.style.display = 'none';
    rayMessage.style.display  = 'none';

    if (twin === 'drey') {
        dreyMessage.style.display = 'block';
    } else if (twin === 'ray') {
        rayMessage.style.display = 'block';
    }

    createConfetti();
}

function reset() {
    dreyMessage.style.display = 'none';
    rayMessage.style.display  = 'none';
    twinChoices.style.display = 'flex';
}