document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission
        alert('Thank you for your message, ' + document.getElementById('name').value + '!');
    });
});
