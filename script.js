let slider = document.getElementById("length-slider");
let password = "";
let isLowercase = document.getElementById("include-lowercase");
let isUppercase = document.getElementById("include-uppercase");
let isNumbers = document.getElementById("include-numbers");
let isSymbols = document.getElementById("include-symbols");
let length = slider.value; // Replaced with the slider variable
let lowercase = isLowercase.checked;
let uppercase = isUppercase.checked;
let numbers = isNumbers.checked;
let symbols = isSymbols.checked;
let chars = "";

const generatePassword = () => {
    if (!lowercase && !uppercase && !numbers && !symbols) {
        // Simplified with logical NOT operator
        alert("Please select at least one option");
        return;
    }

    password = "";
    chars = "";

    if (lowercase) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numbers) {
        chars += "0123456789";
    }

    if (symbols) {
        chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    length = parseInt(slider.value); // Parse the value to an integer
    if (length > 128) {
        length = 128;
    }

    if (length < 8) {
        length = 8;
    }

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").textContent = password; // Use textContent instead of innerHTML for security
};
