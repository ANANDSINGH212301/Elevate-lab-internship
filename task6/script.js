document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Get input values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    // Clear messages
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
    document.querySelector(".success-message").textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required";
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        email.nextElementSibling.textContent = "Enter a valid email";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message cannot be empty";
        isValid = false;
    }

    // Show success message
    if (isValid) {
        document.querySelector(".success-message").textContent = "✅ Message sent successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});
