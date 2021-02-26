const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const loginsAdd = function (login) {
//   if (login.length > 4 && login.length < 16 && !logins.includes(login)) {
//     logins.push(login);
//   }
// } 
// проверка длины логина 
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
}
// проверка на наличие логина в массиве 
const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  } else {
    return false;
  }
}
const addLogin = function (allLogins, login) {
  // проверка на длину логина
  if (isLoginValid(login) === false) {
   alert('Ошибка! Логин должен быть от 4 до 16 символов')
  }
  if (isLoginUnique(allLogins, login) === false) {
   alert('Такой логин уже используется!')
  }
  if (isLoginUnique(allLogins, login) === true && isLoginValid(login) === true) {
    logins.push(login); 
    alert('Логин успешно добавлен!')
 }
}
// console.log(addLogin(logins, 'Ajax'));
// console.log(addLogin(logins, 'robotGoogles'));
// console.log(addLogin(logins, 'Zod'));
// console.log(addLogin(logins, 'jqueryi sextremelyfast'));
