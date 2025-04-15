// Retrieve data from localStorage
const savedData = JSON.parse(localStorage.getItem('contactFormData'));

// Display personalized thank-you message
if (savedData) {
    const personalMessage = document.querySelector('#personal-message');
    personalMessage.textContent = `Thank you, ${savedData.name}, for contacting us!`;
}
