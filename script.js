 const form = document.querySelector('.form');
 const password = document.getElementById('password-input');
 const pwdConfirm = document.getElementById('password-input-valid');

 //попытка оптимизировать не удалась:
 //const pwdInput = password.value; //что не так с этой переменной!??? не работает если объявлять за пределами функции. внутри функции все ок.
 //let pwdInput = password.value; так тоже не работает. Видимо работает только если объявлять внутри функции т.к. данные динамические.
 //let upRegister = /[A-Z]/.test(password.value); - зе сейм тк тут тоже вэлью.
 //const hasLowerCase = /[a-z]/.test(password.value);
 //const hasDigital = /\d/.test(password.value);
 // таким образом оптимизировать нельзя, не будут находиться значения т.к. не работает вэлью. Либо я не знаю как можно это обойти.


 //подсвечиваем красным поле ввода gfhjkz если не выполняются условия:
 password.addEventListener('input', (event) => {
   const upRegister = /[A-Z]/.test(password.value);
   const hasLowerCase = /[a-z]/.test(password.value);
   const hasDigital = /\d/.test(password.value);
   if (password.value.length < 8 || !upRegister || !hasDigital || !hasLowerCase) {
     event.target.classList.add('invalid');
   } else {
     event.target.classList.remove('invalid');
   }
 });
 //подсвечиваем красным поле проверки пароля ввода если не равен полю пароля:
 pwdConfirm.addEventListener('input', (event) => {
   if (pwdConfirm.value !== password.value) {
     event.target.classList.add('invalid');
   } else {
     event.target.classList.remove('invalid');
   }
 });


 // верификация при нажатии кнопки отправить
 form.addEventListener('submit', (evt) => {
   evt.preventDefault();
   let upRegister = /[A-Z]/.test(password.value);
   let hasLowerCase = /[a-z]/.test(password.value);
   let hasDigital = /\d/.test(password.value);
   if (password.value.length >= 8 &&
     password.value === pwdConfirm.value &&
     upRegister && hasDigital && hasLowerCase) {
     form.submit();
   } else {
     console.log("no");
   }
 });


 //отображение пароля по клику на глаз
 // первый вариант с заменой ссылки на картинку в одном теге img. работает при первом и втором нажатии, далее при клике продолжает повторять вторую часть кода. 

 eyeBtn = document.querySelector(".eye");

 eyeBtn.addEventListener('click', (event) => {
   const btn = event.target;
   eyeBtn.setAttribute("src", "pic/eye.png");
   btn.parentElement.querySelector('.password').type = 'text';
   eyeBtn.addEventListener('click', (event) => {
     const btn = event.target;
     eyeBtn.setAttribute("src", "pic/eye-slash.png");
     btn.parentElement.querySelector('.password').type = 'password';
   });
 });



 //этот вариант хорош тем, что при добавлении новых полей там будет автоматически работать глаз, дополнительный код писать в таком случае не нужно.


 //  const eyeBtn = document.querySelectorAll(".eye");
 //  const eyeSlashBtn = document.querySelectorAll(".eye-slash");

 //  eyeSlashBtn.forEach((b) => {
 //    b.addEventListener('click', (event) => {
 //      const btn = event.target;
 //      btn.classList.add('hidden');
 //      btn.parentElement.querySelector('.eye').classList.remove('hidden');
 //      btn.parentElement.querySelector('.password').type = 'text';

 //    });
 //  });

 //  eyeBtn.forEach((c) => {
 //    c.addEventListener('click', (event) => {
 //      const btn = event.target;
 //      btn.classList.add('hidden');
 //      btn.parentElement.querySelector('.eye-slash').classList.remove('hidden');
 //      btn.parentElement.querySelector('.password').type = 'password';

 //    });

 //  });