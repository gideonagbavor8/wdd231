const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;


// Fetch and display member information
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p class="address">${member.address}</p>
            <hr>
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <div>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            </div>
        `;
        membersContainer.appendChild(memberCard);
    });
}

document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('members').classList.add('grid');
    document.getElementById('members').classList.remove('list');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('members').classList.add('list');
    document.getElementById('members').classList.remove('grid');
});

fetchMembers();



const themeToggleButton = document.getElementById('theme-toggle-button');

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Update the button image based on the current mode
            if (document.body.classList.contains('dark-mode')) {
                themeToggleButton.innerHTML = '<img src="images/light.png" alt="Light Mode Icon">';
            } else {
                themeToggleButton.innerHTML = '<img src="images/dark.png" alt="Dark Mode Icon">';
            }
        });















// toggle the menu
document.getElementById('menu-toggle-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const menuButton = document.getElementById('menu-toggle-button');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        menuButton.textContent = '☰';
    } else {
        navLinks.style.display = 'flex';
        menuButton.textContent = '✖';
    }
});