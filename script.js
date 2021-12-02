let form = document.querySelector('.form');
let password = document.getElementById('password-input');
let pwdConfirm = document.getElementById('password-input-valid');
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
  else
 if (upRegister && hasDigital && hasLowerCase) {
    return true;
  }
};
const valid = checkPassword();
if (valid) {
  form.submit();
}
else console.log('no');
});

// let form = document.querySelector('.form');
// let password = document.getElementById('password-input');
//
// form.addEventListener ('submit', function(event) {
// event.preventDefault();
// console.log(/[A-Z]/.test(password.value));});
