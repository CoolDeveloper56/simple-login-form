let show_password = document.getElementById("show");
let hidden_password = document.getElementById("hidden");
let password_input = document.getElementById("password");
let Username_Input = document.getElementById("username");
let submit_adlia = document.getElementById("submit_adlia");
hidden_password.addEventListener("click", hidden);
show_password.addEventListener("click", show);
function hidden() {
    show_password.style.display = 'block';
    hidden_password.style.display = 'none';
    if (password_input.type === "password") {
        password_input.type = "text"
    }
}

function show() {
    show_password.style.display = 'none';
    hidden_password.style.display = 'block';
    if (password_input.type === "text") {
        password_input.type = "password";
    }
}
