// Sample resources data
const resources = [
    { title: "Classroom Management Guide", description: "Learn strategies for managing a productive classroom.", link: "resources.html" },
    { title: "Effective Teaching Strategies", description: "Discover modern techniques to engage your students.", link: "resources.html" },
    { title: "Teacher Wellness Toolkit", description: "Explore ways to promote your mental and physical health as an educator.", link: "resources.html" }
];

// Dynamically populate the Featured Resources section
const resourceList = document.getElementById('resource-list');
resources.forEach(resource => {
    const resourceItem = `
        <div class="resource-item">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.link}" class="btn">Read More</a>
        </div>
    `;
    resourceList.innerHTML += resourceItem;
});



