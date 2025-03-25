document.addEventListener("DOMContentLoaded", function () {
    // Add active class to the current navigation link
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
    
    // const navToggle = document.createElement("button");
    // navToggle.textContent = "☰";
    // navToggle.className = "nav-toggle";
    // navToggle.addEventListener("click", function () {
    //     const navMenu = document.querySelector("nav ul");
    //     navMenu.classList.toggle("show");
    // });
    // document.querySelector("nav").prepend(navToggle);

    
    // function checkScreenSize() {
    //     if (window.innerWidth <= 600) {
    //         navToggle.style.display = "block";
    //         document.querySelector("nav ul").style.display = "none";
    //     } else {
    //         navToggle.style.display = "none";
    //         document.querySelector("nav ul").style.display = "flex";
    //     }
    // }
    // window.addEventListener("resize", checkScreenSize);
    // checkScreenSize();

    // Toggle navigation menu for small screens
    const navToggle = document.createElement("button");
    navToggle.textContent = "☰";
    navToggle.style.fontSize = "24px";
    navToggle.style.display = "none";
    navToggle.style.position = "absolute";
    navToggle.style.top = "10px";
    navToggle.style.right = "10px";
    navToggle.style.border = "none";
    navToggle.style.background = "none";
    navToggle.style.color = "var(--text-color)";
    navToggle.style.cursor = "pointer";
    navToggle.style.fontWeight = "bold";
    navToggle.addEventListener("click", function () {
        const navMenu = document.querySelector("nav ul");
        // navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
            navToggle.textContent = "☰";
        } else {
            navMenu.style.display = "flex";
            navToggle.textContent = "✖";
        }
    });
    document.querySelector("header").appendChild(navToggle);
    // Show the toggle button on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 600) {
            navToggle.style.display = "block";
            document.querySelector("nav ul").style.display = "none";
        } else {
            navToggle.style.display = "none";
            document.querySelector("nav ul").style.display = "flex";
        }
    }
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    // Display all courses initially
    displayCourses();
});


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


function displayCourses(filter) {
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = '';

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject === filter);

    filteredCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.classList.add(course.completed ? 'completed' : 'incomplete');
        courseItem.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <!--<p>${course.title}</p>-->
        `;

        // Add click event to open modal
        courseItem.addEventListener('click', () => {
            const courseDetailsDialog = document.getElementById('course-details');
            courseDetailsDialog.innerHTML = `
                <span id="close-modal" class="close-button">&times;</span>
                <h2>${course.title}</h2>
                <p><strong>Subject:</strong> ${course.subject}</p>
                <p><strong>Course Number:</strong> ${course.number}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            `;
            courseDetailsDialog.showModal();
        
            // Close modal functionality
            document.getElementById('close-modal').addEventListener('click', () => {
                courseDetailsDialog.close();
            });
        });

        coursesList.appendChild(courseItem);
    });

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('credits-count').textContent = totalCredits;
}

function filteredCourses(filter) {
    displayCourses(filter);
}