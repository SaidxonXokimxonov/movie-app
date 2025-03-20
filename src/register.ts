document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const registerBtn = document.getElementById("registerBtn") as HTMLButtonElement;

    registerBtn.addEventListener("click", () => {
        const userData = {
            username: usernameInput.value.trim(),
            password: passwordInput.value.trim(),
            name: nameInput.value.trim(),
        };

        console.log("User Data:", userData);
    });
});