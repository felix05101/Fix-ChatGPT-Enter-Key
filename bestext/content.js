document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Check if the focused element is an input field
    if (document.activeElement.tagName.toLowerCase() === 'input') {
      return; // Let the default Enter key behavior proceed (e.g., form submission)
    }

    // Find the button and click it
    const button = document.querySelector('[data-testid="fruitjuice-send-button"]');
    if (button) {
      button.click();
    }
    
    // Prevent default behavior of Enter key (e.g., form submission)
    event.preventDefault();
  }
});
