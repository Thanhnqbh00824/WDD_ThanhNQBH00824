// Get references to form elements
const form = document.querySelector("form");
const nameInput = form.querySelector("input[placeholder='Name']");
const surnameInput = form.querySelector("input[placeholder='Surname']");
const emailInput = form.querySelector("input[placeholder='Email']");
const passwordInput = form.querySelector("input[placeholder='Password']");
const registerButton = form.querySelector("button[type='submit']");
const loginButton = form.querySelector(".login");
const backHomeButton = form.querySelector(".back-home");

// Form submission handler
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    // Validate inputs
    if (validateInputs()) {
        alert("Registration successful!");
        // Redirect to login page after successful registration
        window.location.href = "login.html";
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

// Login button event handler - This will redirect to login page immediately
loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
});

// Back to home button event handler
backHomeButton.addEventListener("click", () => {
    // Redirect to home page
    window.location.href = "navigation.html";
});
