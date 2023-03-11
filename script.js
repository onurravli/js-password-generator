var slider = document.getElementById("length-slider");
slider.oninput = function () {
    var value = this.value;
    document.getElementById("length-value").innerHTML = `Length: ${value}`;
    // Do something with the value
};

var password = "";

var isLowercase = document.getElementById("include-lowercase");
var isUppercase = document.getElementById("include-uppercase");
var isNumbers = document.getElementById("include-numbers");
var isSymbols = document.getElementById("include-symbols");

function generatePassword() {
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
    var length = document.getElementById("length-slider").value;
    var lowercase = isLowercase.checked;
    var uppercase = isUppercase.checked;
    var numbers = isNumbers.checked;
    var symbols = isSymbols.checked;

    var chars = "";

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

    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").innerHTML = password;
}
