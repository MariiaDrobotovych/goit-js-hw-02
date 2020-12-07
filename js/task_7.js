const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const result = login.length >= 4 && login.length <= 16;
  return result;
};

const isLoginUnique = function (allLogins, login) {
  const result = allLogins.includes(login);
  return result;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === true && isLoginUnique(allLogins, login) === false) {
    allLogins.push(login);
    return 'Логин успешно добавлен!';
  } else if (isLoginUnique(allLogins, login) === true) {
    return 'Такой логин уже используется!'; 
  } else if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }    
};


console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'