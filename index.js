document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Display a confirmation message
    alert('Your message has been received. We are pleased to hear from you and will get back to you soon!');

    // Optionally, reset the form after submission
    event.target.reset();
});
