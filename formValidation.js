const contactForm = document.querySelector(".contact-form");
const inputs = contactForm.querySelectorAll(".form-input");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    let valid = true; // To track if all validations pass

    inputs.forEach((input) => {
        const value = input.value.trim();

        // Reset styles initially
        input.style.borderColor = "";

        if (!value) {
            valid = false;
            input.style.borderColor = "red"; // Highlight empty fields
        } else if (input.type === "email" && !/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) {
            valid = false;
            input.style.borderColor = "red"; // Highlight invalid email
            alert("Please enter a valid email address!");
        } else {
            input.style.borderColor = "green"; // Indicate valid input
        }
    });

    if (valid) {
        alert("Thank you for contacting us!");
        contactForm.reset(); // Clear form fields
        inputs.forEach((input) => (input.style.borderColor = "")); // Reset border styles
    } else {
        alert("Please fill in all fields correctly.");
    }
});