
// scripts.js

// overlay script
document.addEventListener('DOMContentLoaded', (event) => {
    const menuBar = document.querySelector('.menu-bar');
    const overlay = document.getElementById('overlay');
    const closeOverlay = document.getElementById('closeOverlay');

    menuBar.addEventListener('click', function() {
        overlay.style.display = 'block';
    });

    closeOverlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    // Close the overlay when clicking outside of the overlay content
    window.addEventListener('click', function(event) {
        if (event.target == overlay) {
            overlay.style.display = 'none';
        }
    });
});

 // Login form script
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        const username = document.getElementById('loginUsername');
        const password = document.getElementById('loginPassword');
        const userNameErrorMessage = document.getElementById("userNameErrorMessage");
        const passwordErrorMessage = document.getElementById("passwordErrorMessage");

        if (username.value.trim() === '' || username.value.trim().length < 5) {
            username.style.border = '2px solid red';
            userNameErrorMessage.style.display = "block"; // show error message when input is not valid
            valid = false;
        } else {
            username.style.border = '2px solid green';
            userNameErrorMessage.style.display = "none"; // Hide the error message when input is valid
        }

        if (password.value.trim() === '' || password.value.trim().length < 8) {
            password.style.border = '2px solid red';
            passwordErrorMessage.style.display = "block"; // show error message when input is not valid
            valid = false;
        } else {
            password.style.border = '2px solid green';
            passwordErrorMessage.style.display = "none"; // Hide the error message when input is valid
        }   

        if (valid) {
            console.log('Login form is valid');
        }
    });
})

    // Signup form scripts
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let validation = true;

            const user = document.getElementById('signupUsername');
            const userNameError = document.getElementById('userNameError');
            const email = document.getElementById('signupEmail');
            const emailError = document.getElementById('emailError');
            const password1 = document.getElementById('signupPassword1');
            const password1Error = document.getElementById('password1Error');
            const password2 = document.getElementById('signupPassword2');
            const password2Error = document.getElementById('password2Error');

            if (user.value.trim() === '' || user.value.trim().length < 5) {
                user.style.border = '3px solid red';
                userNameError.style.display = "block"; // show error message when input is not valid
                validation = false;
            } else {
                user.style.border = '3px solid green';
                userNameError.style.display = "none"; // Hide the error message when input is valid
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                email.style.border = '3px solid red';
                emailError.style.display = "block"; // show error message when input is not valid
                validation = false;
            } else {
                email.style.border = '3px solid green';
                emailError.style.display = "none"; // Hide the error message when input is valid
            }

            if (password1.value.trim() === '' || password1.value.trim().length < 8) {
                password1.style.border = '3px solid red';
                password1Error.style.display = "block"; // show error message when input is not valid
                validation = false;
            } else {
                password1.style.border = '3px solid green';
                password1Error.style.display = "none"; // Hide the error message when input is valid
            }

            if (password2.value.trim() === '' || password2.value.trim().length < 8 || password1.value !== password2.value) {
                password2.style.border = '3px solid red';
                password2Error.style.display = "block"; // show error message when input is not valid
                validation = false;
            } else {
                password2.style.border = '3px solid green';
                password2Error.style.display = "none"; // Hide the error message when input is valid
            }

            if (validation) {
                console.log('Signup form is valid');
                // Submit the form or perform further actions
            }
        });
    };

})

