/* mexendo com os inputs */

//declarando email
let email = document.getElementById('email');

//declarando password
let password = document.getElementById('password');

//evento de focus pra email
email.addEventListener('focus', () => {
    email.style.borderColor = "#4323B4";
});

//evento de blur para email
email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc"
});

//evento de focus pra password
password.addEventListener('focus', () => {
    password.style.borderColor = "#4323B4";
});

//evento de blur pra password
password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc";
});