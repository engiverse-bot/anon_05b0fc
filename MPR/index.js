const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registerPopupBtn = document.querySelector('.register-popup'); // Button to toggle between forms

// Toggle between login and registration forms using Register and Login Links
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

// Show the registration form and hide the login form
registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

// Show the login form and hide the registration form
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Handle registration form submission
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const age = document.getElementById('register-age').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Store age and credentials (insecure for demonstration purposes)
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    localStorage.setItem('age', age);

    alert('Registration successful! You can now log in.');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');
    const age = localStorage.getItem('age');

    if (email === registeredEmail && password === registeredPassword) {
        // Redirect to the appropriate news page based on age
        if (age >= 18) {
            window.location.href = 'above18.html';
        } else if (age >= 15) {
            window.location.href = 'above15.html';
        } else {
            window.location.href = 'above12.html';
        }
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Handle "About" modal toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('.navigation a:nth-child(1)'); // Assuming "About" is the first link
    const aboutModal = document.getElementById('about-modal');
    const closeButtonAbout = document.querySelector('.close-button');

    // Toggle the modal visibility
    const toggleModal = (modal) => {
        modal.classList.toggle('hidden'); // Toggle the hidden class
    };

    // Open About modal when "About" is clicked
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        toggleModal(aboutModal); // Toggle modal visibility
    });

    // Close About modal when close button is clicked
    closeButtonAbout.addEventListener('click', () => toggleModal(aboutModal));

    // Close About modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === aboutModal) {
            toggleModal(aboutModal);
        }
    });
});

// Handle "Contact" modal toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('.navigation a:nth-child(2)'); // Assuming "Contact" is the second link
    const contactModal = document.getElementById('contact-modal');
    const closeButtonContact = document.querySelector('.close-contact');

    // Toggle the modal visibility
    const toggleModal = (modal) => {
        modal.classList.toggle('hidden'); // Toggle the hidden class
    };

    // Open Contact modal when "Contact" is clicked
    contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        toggleModal(contactModal); // Toggle modal visibility
    });

    // Close Contact modal when close button is clicked
    closeButtonContact.addEventListener('click', () => toggleModal(contactModal));

    // Close Contact modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            toggleModal(contactModal);
        }
    });
});

// Event listener for the "REGISTER" button toggle functionality
registerPopupBtn.addEventListener('click', function() {
    if (registerPopupBtn.textContent === "REGISTER") {
        // Show the register form and hide the login form
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        // Change button text to "LOGIN"
        registerPopupBtn.textContent = "LOGIN";
    } else {
        // Show the login form and hide the register form
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        // Change button text back to "REGISTER"
        registerPopupBtn.textContent = "REGISTER";
    }
});
