console.log("YouTube Zoom Extension Loaded!");

let zoomLevel = 1.0;
const zoomStep = 0.05; // Smooth zoom step
let isPanning = false;
let startX = 0;
let startY = 0;
let translateX = 0; // Track current pan position
let translateY = 0;

// Apply Zoom and Pan Transform
function applyTransform() {
    const video = document.querySelector('video');
    if (video) {
        video.style.transform = `scale(${zoomLevel.toFixed(2)}) translate(${translateX}px, ${translateY}px)`;
        video.style.transformOrigin = 'center center';
    }
}

// Ctrl + Scroll Wheel for Zooming
window.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
        zoomLevel += event.deltaY > 0 ? -zoomStep : zoomStep;
        zoomLevel = Math.max(0.5, Math.min(3, zoomLevel));
        applyTransform();
    }
}, { passive: false });

// 🛑 Ctrl + Left Click and Drag for Panning (Right-Click Disabled)
window.addEventListener('mousedown', (event) => {
    // Start panning only if Ctrl + Left Click is pressed
    if (event.ctrlKey && event.button === 0) {  
        isPanning = true;
        startX = event.clientX;
        startY = event.clientY;
        event.preventDefault(); // Prevent accidental menu triggering
    }
});

// Prevent right-click only during panning
window.addEventListener('contextmenu', (event) => {
    if (isPanning) {
        event.preventDefault(); // Block right-click only while panning
    }
});

window.addEventListener('mousemove', (event) => {
    if (isPanning) {
        const deltaX = event.clientX - startX;
        const deltaY = event.clientY - startY;
        translateX += deltaX;
        translateY += deltaY;
        startX = event.clientX;
        startY = event.clientY;
        applyTransform();
    }
});

window.addEventListener('mouseup', () => {
    isPanning = false; // Stop panning and allow right-click again
});

// Ensure Zoom Persists in Fullscreen Mode
document.addEventListener('fullscreenchange', applyTransform);