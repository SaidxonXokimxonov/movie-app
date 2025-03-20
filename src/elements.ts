/**
 *  Login.html ning kodlari
 * 
 */
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    const errorMessage = document.getElementById('errorMessage') as HTMLParagraphElement;
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;


//username va passwordga yozilganligini tekshiradi va Loginbuttonga ishlashiga ruxsat beradi
    const validateInputs = () => {
        if (usernameInput.value.trim() && passwordInput.value.trim()) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    };

//input va passwordning ichidagi yozilgan malumotni
    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'team-1' && password === 'project') {
            errorMessage.classList.add('hidden');
            //inputdagi malumotlar saqlanaydigan object
            const userData = {
                username: username,
                password: password
            };
            console.log('Foydalanuvchi ma\'lumotlari:', userData);
            alert('Kirish muvaffaqiyatli!');
        } else {
            errorMessage.classList.remove('hidden');
        }
    });
});