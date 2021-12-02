let form = document.querySelector('.form');
let password = document.getElementById('password-input');
let pwdConfirm = document.getElementById('password-input-valid');
let pwdValue = password.value;
const hasUpperCase = /[A-Z]/.test(pwdValue);
const hasLowerCase = /[a-z]/.test(pwdValue);
const hasDigital = /\d/.test(pwdValue);

const checkPassword = () => {
  if (password.value !== pwdConfirm.value) {
    return false;
  }
  else if (pwdValue.length < 8) {
    return false;
 }
  else
 if (hasUpperCase && hasDigital && hasLowerCase) {
    return true;
  }
};

form.addEventListener ('submit', function(event) {
event.preventDefault();
const valid = checkPassword()
if (valid) {
  form.submit();
}
else console.log('no');
});
