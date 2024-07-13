document.addEventListener('wheel', function(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(0.25, scale), 2); // Begrenze das Zoomen auf 25% bis 200%
    console.log(`Wheel zoom: scale(${scale})`);
    setTransform();
}, { passive: false });

document.getElementById('horizontal-slider').addEventListener('input', function(e) {
    translateX = e.target.value * 5; // Multiplikator zum Erhöhen der Bewegung
    // console.log(`Horizontal slider: translateX(${translateX})`);
    setTransform();
});

document.getElementById('vertical-slider').addEventListener('input', function(e) {
    translateY = e.target.value * 5; // Multiplikator zum Erhöhen der Bewegung
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
