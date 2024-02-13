const usernameField = document.getElementById('username');
const passwordField = document.getElementById('pass');

const users = document.querySelectorAll(".inputs");
const password = "1234";

const button = document.getElementById('signin');

button.addEventListener("click", (e) => {
    if ((usernameField.value == "admin") && (passwordField.value === password)) {
        alert("Welcome");
    } else {
        alert("Wrong username or Password");
    }
});




