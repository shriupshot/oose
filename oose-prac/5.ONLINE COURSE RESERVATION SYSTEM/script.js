// script.js for handling localStorage and loading courses
document.addEventListener('DOMContentLoaded', () => {
    const coursesList = JSON.parse(localStorage.getItem('courses')) || [];

    // Load available courses
    if (document.getElementById('courses-list')) {
        const coursesContainer = document.getElementById('courses-list');
        coursesList.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <p>Duration: ${course.duration} weeks</p>
            `;
            coursesContainer.appendChild(courseElement);
        });
    }

    // Load courses for reservation page
    if (document.getElementById('course')) {
        const courseSelect = document.getElementById('course');
        coursesList.forEach(course => {
            const option = document.createElement('option');
            option.value = course.name;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    }

    // Add course form submission
    if (document.getElementById('add-course-form')) {
        document.getElementById('add-course-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('course-name').value;
            const description = document.getElementById('course-description').value;
            const duration = document.getElementById('course-duration').value;

            const newCourse = { name, description, duration };
            coursesList.push(newCourse);
            localStorage.setItem('courses', JSON.stringify(coursesList));

            alert('Course added successfully!');
            this.reset();
        });
    }

    // Reservation form submission
    if (document.getElementById('reservation-form')) {
        document.getElementById('reservation-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;

            alert(`Reservation Successful for ${name} (${email}) in ${course}`);
        });
    }
});
