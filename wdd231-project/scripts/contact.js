// Select the form
const contactForm = document.querySelector('#contact-form');

// Asynchronous function to simulate sending data to a server
async function sendFormData(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Fixed here
        }

        const result = await response.json();
        console.log('Server response:', result);

        // Redirect to thank you page
        window.location.href = 'thankyou.html';
    } catch (error) {
        console.error('Error sending form data:', error);
        alert('There was an error sending your message. Please try again later.');
    }
}


// Save and send form data
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Prepare data object
    const formData = { name, email, message };

    // Save to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Send the data using the asynchronous function
    await sendFormData(formData);
}

// Add event listener to the form
contactForm.addEventListener('submit', handleFormSubmit);
