* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.controls {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
}

.background {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Ensure no overflow */
}

.background img {
    width: 100%; /* Make sure the image fits the width */
    height: auto; /* Maintain aspect ratio */
    max-height: 100%; /* Limit height to window height */
    display: none; /* Initially hidden */
}

.arrow {
    position: absolute;
    width: 30px; /* Default size */
    height: 30px; /* Default size */
    cursor: pointer;
    background-size: contain; /* Scale the image to fit the div */
    left: 50%; /* Start centered horizontally */
    top: 50%; /* Start centered vertically */
    transform: translate(-50%, -50%); /* Center the arrow */
}
