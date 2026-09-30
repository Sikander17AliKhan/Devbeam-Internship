// Selecting elements
const form = document.getElementById("greetingForm");
const nameInput = document.getElementById("name");
const greetButton = document.getElementById("greetButton");
const inputMessage = document.getElementById("inputMessage");
const message = document.getElementById("message");


// 1. INPUT EVENT
nameInput.addEventListener("input", function (event) {

    inputMessage.textContent = `You are typing: ${event.target.value}`;

});


// 2. CLICK EVENT
greetButton.addEventListener("click", function () {

    console.log("Greet button clicked");

});


// 3. SUBMIT EVENT
form.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    message.textContent = `Hello, ${name}! Welcome!`;

    nameInput.value = "";
    inputMessage.textContent = "";

});