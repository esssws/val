// Select the buttons by their IDs
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Add event listener for the "Yes" button
yesButton.addEventListener('click', () => {
    // Redirect to success.html immediately
    window.location.href = "success.html";
});

// Function to move the "No" button slightly within 50px in all directions
function moveNoButtonSlightly(e) {
    const noButtonRect = noButton.getBoundingClientRect(); // Get the button's size

    // Get the window size
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Random small offset to move the "No" button within a 50px range in any direction
    const offsetX = Math.random() * 100 - 50;  // Random value between -50 and 50
    const offsetY = Math.random() * 100 - 50;  // Random value between -50 and 50

    // Calculate the new position based on the current position and the small random offset
    let newLeft = noButton.offsetLeft + offsetX;
    let newTop = noButton.offsetTop + offsetY;

    // Ensure the "No" button stays within the window bounds (with a small margin)
    const margin = 20;

    // Make sure the "No" button doesn't go off the left side
    if (newLeft < margin) {
        newLeft = margin;
    }
    // Make sure the "No" button doesn't go off the right side
    if (newLeft + noButtonRect.width > windowWidth - margin) {
        newLeft = windowWidth - noButtonRect.width - margin;
    }
    // Make sure the "No" button doesn't go off the top
    if (newTop < margin) {
        newTop = margin;
    }
    // Make sure the "No" button doesn't go off the bottom
    if (newTop + noButtonRect.height > windowHeight - margin) {
        newTop = windowHeight - noButtonRect.height - margin;
    }

    // Set the "No" button's new position within the bounds
    noButton.style.position = "absolute";
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
}

// Add event listener for mouse hover on the "No" button
noButton.addEventListener('mouseenter', () => {
    // Start the "slightly move away" behavior when the cursor hovers over the "No" button
    document.addEventListener('mousemove', moveNoButtonSlightly);
});

// Stop the "slightly move away" behavior when the cursor leaves the "No" button
noButton.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', moveNoButtonSlightly);
});
