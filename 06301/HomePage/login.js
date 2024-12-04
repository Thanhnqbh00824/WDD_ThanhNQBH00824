// Select form and input elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting by default

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation checks
    if (!validateEmail(email)) {
        alert('Please enter a valid email address or phone number.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Save credentials to local storage
    saveCredentialsToLocalStorage(email, password);

    // Simulate login process
    console.log('Logging in with:', { email, password });
    alert('Login successful! Redirecting...');

    // Redirect to navigation.html
    window.location.href = 'navigation.html'; // Path to your navigation.html file
});

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email) || isPhoneNumber(email);
}

// Function to validate phone number
function isPhoneNumber(input) {
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust for phone number length
    return phoneRegex.test(input);
}

// Function to save credentials to Local Storage
function saveCredentialsToLocalStorage(email, password) {
    const user = {
        email: email,
        password: password, // Note: For security, sensitive data like passwords shouldn't be stored in plain text.
    };
    localStorage.setItem('userCredentials', JSON.stringify(user));
}

// Optional: Load saved credentials (if needed)
window.addEventListener('DOMContentLoaded', () => {
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
        const { email } = JSON.parse(savedCredentials);
        emailInput.value = email; // Prefill email input with saved email
    }
});
