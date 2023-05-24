// Get the form elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");

// Add event listeners to the form elements
loginButton.addEventListener("click", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the username and password from the input fields
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    // Validate the username and password
    if (username && password) {
        // Simulate a login request
        alert("Login successful!");
    } else {
        // Show an error message
        alert("Please enter your username and password!");
    }
});

registerButton.addEventListener("click", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the username, email and password from the input fields
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;
    // Validate the username, email and password
    if (username && email && password && confirmPassword) {
        // Check if the password and confirm password match
        if (password === confirmPassword) {
            // Simulate a register request
            alert("Register successful!");
        } else {
            // Show an error message
            alert("The password and confirm password do not match!");
        }
    } else {
        // Show an error message
        alert("Please enter your username, email and password!");
    }
});

switchToRegister.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();
    // Hide the login form and show the register form
    loginForm.classList.remove("active");
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    registerForm.classList.add("active");
});

switchToLogin.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();
    // Hide the register form and show the login form
    registerForm.classList.remove("active");
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.classList.add("active");
});