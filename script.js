let slider = document.getElementById("length-slider");
let password = "";
let isLowercase = document.getElementById("include-lowercase");
let isUppercase = document.getElementById("include-uppercase");
let isNumbers = document.getElementById("include-numbers");
let isSymbols = document.getElementById("include-symbols");
let length = document.getElementById("length-slider").value;
let lowercase = isLowercase.checked;
let uppercase = isUppercase.checked;
let numbers = isNumbers.checked;
let symbols = isSymbols.checked;
let chars = "";

const generatePassword = () => {
    if (
        isLowercase.checked == false &&
        isUppercase.checked == false &&
        isNumbers.checked == false &&
        isSymbols.checked == false
    ) {
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

    if (length > 128) {
        length = 128;
    }

    if (length < 8) {
        length = 8;
    }

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").innerHTML = password;
};
