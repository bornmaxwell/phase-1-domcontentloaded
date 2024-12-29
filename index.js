document.addEventListener("DOMContentLoaded", () => {
    // Locate the element to modify
    const textElement = document.getElementById("text");

    // Change the text content to the expected value
    if (textElement) {
        textElement.textContent = "This is really cool!";
    }
});
