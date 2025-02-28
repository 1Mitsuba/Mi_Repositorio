function openEnvelope() {
    document.querySelector('.envelope').classList.toggle('open');
}

function createRisingElement() {
    const element = document.createElement('div');
    const randomValue = Math.random();
    element.classList.add('rising-element');
    
    if (randomValue < 0.33) {
        element.innerHTML = '❤️';
        element.classList.add('heart');
    } else if (randomValue < 0.66) {
        element.innerHTML = '⭐';
        element.classList.add('star');
    } else {
        element.innerHTML = '🌸';
        element.classList.add('flower');
    }

    element.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(element);
    setTimeout(() => {
        element.remove();
    }, 3000); // Adjusted to match the animation duration
}

setInterval(createRisingElement, 600); // Increased frequency

// Added function to toggle envelope
function toggleEnvelope() {
    document.querySelector('.envelope').classList.toggle('open');
}