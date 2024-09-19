const arrow = document.getElementById('arrow');
const bgImage = document.getElementById('bgImage');
const imageUrlInput = document.getElementById('imageUrl');
const setImageButton = document.getElementById('setImage');
const arrowImageUrlInput = document.getElementById('arrowImageUrl');
const setArrowImageButton = document.getElementById('setArrowImage');
const arrowSizeInput = document.getElementById('arrowSize');
const rotationInput = document.getElementById('rotation');
const sizeValue = document.getElementById('sizeValue');
let isDragging = false;

setImageButton.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    bgImage.src = imageUrl;
    bgImage.style.display = 'block'; // Show the image
});

setArrowImageButton.addEventListener('click', () => {
    const arrowImageUrl = arrowImageUrlInput.value;
    arrow.style.backgroundImage = `url(${arrowImageUrl})`;
    updateArrowSize();
});

arrowSizeInput.addEventListener('input', () => {
    const size = arrowSizeInput.value;
    sizeValue.textContent = size; // Update size display
    arrow.style.width = `${size}px`;
    arrow.style.height = `${size}px`;
});

rotationInput.addEventListener('input', () => {
    const rotation = rotationInput.value;
    arrow.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`; // Apply rotation
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
        const x = e.clientX - rect.left - (arrow.offsetWidth / 2); // Center the arrow
        const y = e.clientY - rect.top - (arrow.offsetHeight / 2); // Center the arrow
        
        // Constrain arrow within the bounds of the background
        const constrainedX = Math.max(0, Math.min(rect.width - arrow.offsetWidth, x));
        const constrainedY = Math.max(0, Math.min(rect.height - arrow.offsetHeight, y));

        arrow.style.left = `${constrainedX}px`;
        arrow.style.top = `${constrainedY}px`;
    }
});

function updateArrowSize() {
    const size = arrowSizeInput.value;
    arrow.style.width = `${size}px`;
    arrow.style.height = `${size}px`;
}
