newFunction();
function newFunction() {
    document.addEventListener("DOMContentLoaded", function () {
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var nameInput = document.getElementById("name");
        var registerBtn = document.getElementById("registerBtn");
        registerBtn.addEventListener("click", function () {
            var userData = {
                username: usernameInput.value.trim(),
                password: passwordInput.value.trim(),
                name: nameInput.value.trim(),
            };
            console.log("User Data:", userData);
        });
    });
}

