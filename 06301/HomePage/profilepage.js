// Load user information from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const userCredentials = localStorage.getItem('userCredentials');

    if (userCredentials) {
        const { email, password } = JSON.parse(userCredentials);

        // Display user information on the profile page
        document.getElementById('user-email').textContent = email;
    } else {
        // Redirect back to login if no user information is found
        alert('No user logged in. Redirecting to login page...');
        window.location.href = 'login.html';
    }
});

// Logout button logic
document.getElementById('logout-button').addEventListener('click', () => {
    // Clear localStorage and redirect to login page
    localStorage.removeItem('userCredentials');
    alert('Logged out successfully.');
    window.location.href = 'login.html';
});

// Homepage button logic
document.getElementById('homepage-button').addEventListener('click', () => {
    // Redirect to navigation.html (homepage)
    window.location.href = 'navigation.html';
});
