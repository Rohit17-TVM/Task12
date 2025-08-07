function validatePasswords() {
    const pass1 = document.getElementById('password').value;
    const pass2 = document.getElementById('confirmPassword').value;

    if (pass1 !== pass2) {
        alert('Passwords do not match!');
        return false; // Prevent form submission
    }
    return true;
}
