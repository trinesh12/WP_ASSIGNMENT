function validateRegistration() {
    var name = document.getElementById("reg-name").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-pass").value;
    var confirmPassword = document.getElementById("reg-confirm-pass").value;

    if (name == "") {
        alert("Please enter your name.");
        return false; // prevent form from submitting
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password == "") {
        alert("Please enter a password.");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (confirmPassword == "") {
        alert("Please confirm your password.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration successful!");
    return true; /* Set true to submit form normally */
}

function validateLogin() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-pass").value;

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password.");
        return false;
    }

    alert("Login successful!");
    return true;
}
