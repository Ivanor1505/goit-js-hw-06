const loginForm = document.querySelector('.login-form');

console.dir(loginForm);

loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
        
    if (!emailInput.value || !passwordInput.value) {
    alert('Всі поля повинні бути заповнені');
    return;
    }
    
    const formData = {
    email: emailInput.value,
    password: passwordInput.value,
    };
    
console.log(formData);
  loginForm.reset();
}