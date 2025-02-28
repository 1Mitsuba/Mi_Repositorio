function openEnvelope() {
    document.querySelector('.envelope').classList.toggle('open');
}

function createRisingElement() {
    const element = document.createElement('div');
    const isHeart = Math.random() > 0.5;
    element.classList.add('rising-element');
    if (isHeart) {
        element.innerHTML = '❤️';
    } else {
        element.innerHTML = '⭐';
        element.classList.add('star');
    }
    element.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(element);
    setTimeout(() => {
        element.remove();
    }, 3000); // Adjusted to match the animation duration
}

setInterval(createRisingElement, 500); // Increased frequency