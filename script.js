const chatrooms = Array.from({ length: 70 }, (_, i) => ({
    id: i + 1,
    title: `Chatroom ${i + 1}`,
    description: `This is Chatroom ${i + 1}`
}));

let startX = 0, startY = 0, translateX = 0, translateY = 0, scale = 1;
let isDragging = false;

function setTransform() {
    // console.log(`Setting transform: scale(${scale}), translate(${translateX}px, ${translateY}px)`);
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    document.getElementById('layer1').style.transform = `translate(${translateX * 0.5}px, ${translateY * 0.5}px) scale(${scale})`;
    document.getElementById('layer2').style.transform = `translate(${translateX * 0.3}px, ${translateY * 0.3}px) scale(${scale})`;
    document.getElementById('layer3').style.transform = `translate(${translateX * 0.1}px, ${translateY * 0.1}px) scale(${scale})`;
    document.getElementById('interactive-layer').style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    updatePositionInfo();
}

function updatePositionInfo() {
    const info = document.getElementById('position-info');
    info.textContent = `Position: (${Math.round(translateX)}, ${Math.round(translateY)}) Zoom: ${scale.toFixed(2)}`;
}

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
});

document.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    translateX += dx;
    translateY += dy;
    setTransform();
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

document.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    translateX += dx;
    translateY += dy;
    setTransform();
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.addEventListener('mouseleave', function() {
    isDragging = false;
});

// Zoom-Funktion
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(0.25, scale), 2); // Begrenze das Zoomen auf 25% bis 200%
    // console.log(`Wheel zoom: scale(${scale})`);
    setTransform();
}, { passive: false });

// Schieberegler
document.getElementById('horizontal-slider').addEventListener('input', function(e) {
    translateX = e.target.value * 2; // Multiplikator zum Verkleinern der Bewegung
    // console.log(`Horizontal slider: translateX(${translateX})`);
    setTransform();
});

document.getElementById('vertical-slider').addEventListener('input', function(e) {
    translateY = e.target.value * 2; // Multiplikator zum Verkleinern der Bewegung
    // console.log(`Vertical slider: translateY(${translateY})`);
    setTransform();
});

document.querySelectorAll('.zoom-button').forEach(button => {
    button.addEventListener('click', function(e) {
        scale = parseFloat(e.target.dataset.zoom);
        // console.log(`Zoom button clicked: scale(${scale})`);
        setTransform();
    });
});

// Punkte zufällig hinzufügen und Klick-Ereignisse verwalten
document.addEventListener('DOMContentLoaded', () => {
    const interactiveLayer = document.getElementById('interactive-layer');
    const templateCard = document.getElementById('template-card');
    
    chatrooms.forEach((room, i) => {
        const point = document.createElement('div');
        point.className = 'point';
        point.style.left = `${Math.random() * 95}%`;
        point.style.top = `${Math.random() * 95}%`;
        point.textContent = `C${room.id}`;
        if (i % 5 === 0) {
            point.classList.add('pulsing');
        }
        interactiveLayer.appendChild(point);

        point.addEventListener('click', () => {
            const card = document.querySelector('.card-content');
            card.innerHTML = `<h2>${room.title}</h2><p>${room.description}</p>`;
            templateCard.style.display = 'block';
            templateCard.style.left = point.style.left;
            templateCard.style.top = point.style.top;
        });

        templateCard.addEventListener('click', () => {
            templateCard.style.display = 'none';
        });
    });
});