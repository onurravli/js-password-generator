function generatePassword() {
    let password = "";
    let chars = "";

    if (
        !document.getElementById("include-lowercase").checked &&
        !document.getElementById("include-uppercase").checked &&
        !document.getElementById("include-numbers").checked &&
        !document.getElementById("include-symbols").checked
    ) {
        // alert("Please select at least one character type.");
        document.getElementById("password").textContent = "Please select at least one character type.";
        return;
    }

    if (document.getElementById("include-lowercase").checked) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("include-uppercase").checked) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("include-numbers").checked) {
        chars += "0123456789";
    }

    if (document.getElementById("include-symbols").checked) {
        chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let slider = document.getElementById("length-slider");
    let length = parseInt(slider.value);

    if (length > 128) {
        length = 128;
    }

    if (length < 8) {
        length = 8;
    }

    for (let i = 0; i < length; i++) {
        let char = chars.charAt(Math.floor(Math.random() * chars.length));
        password += char;
    }

    document.getElementById("password").textContent = password; // Use textContent instead of innerHTML for security

    // Copy to clipboard
    let copyButton = document.getElementById("copy-btn");
    copyButton.style.display = "block";
    copyButton.addEventListener("click", function () {
        let copyText = document.getElementById("password")[0];
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(copyText.value);
    });
}
