const arrow = document.getElementById('arrow');
const bgImage = document.getElementById('bgImage');
const imageUrlInput = document.getElementById('imageUrl');
const setImageButton = document.getElementById('setImage');
let isDragging = false;

setImageButton.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    bgImage.src = imageUrl;
    bgImage.style.display = 'block'; // Show the image
});

arrow.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const rect = arrow.parentNode.getBoundingClientRect();
        const x = e.clientX - rect.left - 10; // Center the arrow
        const y = e.clientY - rect.top - 20; // Center the arrow
        arrow.style.left = `${x}px`;
        arrow.style.top = `${y}px`;
    }
});
