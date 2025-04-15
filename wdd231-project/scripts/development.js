// Array of event data
const events = [
    { title: "Webinar: Effective Online Teaching", date: "2025-06-25", description: "Strategies to create engaging virtual classrooms." },
    { title: "Workshop: Classroom Management", date: "2025-06-30", description: "Tools for managing diverse learning environments." },
    { title: "Conference: Innovations in Education", date: "2025-07-15", description: "Learn about the latest teaching trends." },
    { title: "Training: Assessments for Success", date: "2025-07-25", description: "How to create meaningful student assessments." },
];
// Filter events happening after June 1, 2025
const upcomingEvents = events.filter(event => new Date(event.date) > new Date("2025-06-01"));

// Dynamically populate the Upcoming Events section
const eventsList = document.querySelector('.events-list');
upcomingEvents.forEach(event => {
    const eventItem = `
        <div class="event-item">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <a href="#" class="btn">Register</a>
        </div>
    `;
    eventsList.innerHTML += eventItem;
});

