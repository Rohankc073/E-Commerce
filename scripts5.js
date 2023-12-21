// Function to handle click events on love buttons
const loveButtons = document.querySelectorAll('.love-button, .love-buttonR2');

loveButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the heart icon when clicked
        this.querySelector('i').classList.toggle('fas'); // Add the 'fas' class to change the heart icon to solid
    });
});

// Function to handle scrolling back to the top
const backToTopButton = document.querySelector('.foot-panel1');

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll back to the top when clicked
});
