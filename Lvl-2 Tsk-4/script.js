document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const notification = document.getElementById('notification');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    let users = [];

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.classList.remove('active');
        registerContainer.classList.add('active');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerContainer.classList.remove('active');
        loginContainer.classList.add('active');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        if (users.some(user => user.username === newUsername)) {
            showNotification('Username already taken!', true);
        } else {
            users.push({ username: newUsername, password: newPassword });
            showNotification('Registration successful! Please login.');
            registerContainer.classList.remove('active');
            loginContainer.classList.add('active');
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            showNotification('Login successful! Redirecting...', false, () => {
                window.location.href = 'secured-page.html';  // Redirect to secured page
            });
        } else {
            showNotification('Invalid username or password', true);
        }
    });

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Hide';
            } else {
                input.type = 'password';
                button.textContent = 'Show';
            }
        });
    });

    function showNotification(message, isError = false, callback = null) {
        notification.textContent = message;
        notification.style.backgroundColor = isError ? '#e74c3c' : '#007bff';
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
            if (callback) callback();
        }, 3000);
    }

    // Initialize with the login form visible
    loginContainer.classList.add('active');
});
