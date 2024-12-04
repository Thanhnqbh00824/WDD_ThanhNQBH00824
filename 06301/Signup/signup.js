// Get references to form elements
const form = document.querySelector("form");
const nameInput = form.querySelector("input[placeholder='Name']");
const surnameInput = form.querySelector("input[placeholder='Surname']");
const emailInput = form.querySelector("input[placeholder='Email']");
const passwordInput = form.querySelector("input[placeholder='Password']");
const registerButton = form.querySelector("button[type='submit']");
const googleButton = form.querySelector(".google");
const loginButton = form.querySelector(".login");
const backHomeButton = form.querySelector(".back-home");

// Form submission handler
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Validate inputs
    if (validateInputs()) {
        alert("Registration successful!");
        // Additional logic (e.g., send data to server) can be added here
    }
});

// Input validation function
function validateInputs() {
    if (!nameInput.value.trim()) {
        alert("Please enter your name.");
        return false;
    }
    if (!surnameInput.value.trim()) {
        alert("Please enter your surname.");
        return false;
    }
    if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

// Email validation helper
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Google button event handler
googleButton.addEventListener("click", () => {
    alert("Google login feature is coming soon!");
    // Add Google OAuth logic here
});

// Login button event handler
loginButton.addEventListener("click", () => {
    alert("Redirecting to login page...");
    // Redirect to login page logic here
});

// Back to home button event handler
backHomeButton.addEventListener("click", () => {
    alert("Redirecting to home page...");
    // Redirect to home page logic here
});