let form = document.querySelector('.form');
let password = document.getElementById('password-input');
let pwdConfirm = document.getElementById('password-input-valid');

//подсвечиваем красным поле ввода если не выполняются условия пароля:
password.addEventListener('change', (event) => {
  const pwdInput = password.value
  const upRegister = /[A-Z]/.test(pwdInput);
  const hasLowerCase = /[a-z]/.test(pwdInput);
  const hasDigital = /\d/.test(pwdInput);

  if (pwdInput.length < 8 || !upRegister || !hasDigital || !hasLowerCase) {
  event.target.classList.add('invalid');
} else {
  event.target.classList.remove('invalid');
}
});

form.addEventListener ('submit', function(event) {
event.preventDefault();

const upRegister = /[A-Z]/.test(password.value);
const hasLowerCase = /[a-z]/.test(password.value);
const hasDigital = /\d/.test(password.value);

        const checkPassword = () => {
          if (password.value !== pwdConfirm.value) {
            return false;
          }
          else if (password.value.length < 8) {
            return false;
         }
          else if (upRegister && hasDigital && hasLowerCase) {
            return true;
          }
        };
 const valid = checkPassword();
    if (valid) {
      form.submit();
    }
    else console.log('no');
    });


//отображение пароля по клику на глаз

const eyeBtn = document.querySelectorAll(".eye");
const eyeSlashBtn = document.querySelectorAll(".eye-slash");

eyeSlashBtn.forEach((b) => {
    b.addEventListener('click', (event) => {
        const btn = event.target;
        btn.classList.add('hidden');
        btn.parentElement.querySelector('.eye').classList.remove('hidden');
        btn.parentElement.querySelector('.password').type = 'text';

    });
})

eyeBtn.forEach((c) => {
  c.addEventListener('click', (event) => {
    const btn = event.target;
    btn.classList.add('hidden');
    btn.parentElement.querySelector('.eye-slash').classList.remove('hidden');
    btn.parentElement.querySelector('.password').type = 'password';

   });

})
