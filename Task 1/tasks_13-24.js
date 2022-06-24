/* *** Task 13 *** */
// Отредактировать функцию isValidPassword при помощи операторов сравнения так,
// чтобы в случае соответствия переданного и сохраненного паролей isMatch присваивалось значение true.
// Функция должна возвращать isMatch.
{
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
    const isMatch = (password === SAVED_PASSWORD);
    return isMatch;
    // Пиши код выше этой строки
  }

  console.log('Task 13: ', isValidPassword('jqueryismyjam'));
  console.log('Task 13: ', isValidPassword('jsisawesome'));
}

/* *** Task 14 *** */
// Отредактировать функцию checkAge при помощи операторов сравнения так,
// чтобы в случае возраста, который больше или равен 18, выполнялся блок if.
// В противном случае выполняется блок else.
// Функция должна возвращать message.
{
  function checkAge(age) {
    let message;

    /* исправь эту строку */ if (age >= 18) {
      message = 'Вы совершеннолетний человек';
    } else {
      message = 'Вы не совершеннолетний человек';
    }

    return message;
  }

  console.log('Task 14: ', checkAge(19));
  console.log('Task 14: ', checkAge(11));
}

/* *** Task 15 *** */
// Дописать функцию checkStorage используя оператор больше > так,
// чтобы в случае если ordered больше available, в переменную message записывалась строка 'На складе недостаточно товаров!'.
// В противном случае 'Заказ оформлен, с вами свяжется менеджер'
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    if (ordered < available) {
      message = 'На складе недостаточно товаров!';
    } else {
      message = 'Заказ оформлен, с вами свяжется менеджер';
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 15: ', checkStorage(19, 20));
  console.log('Task 15: ', checkStorage(11, 7));
}

/* *** Task 16 *** */
// Используя операторы присваивания с действием (умножение, деление, вычитание, сложение)
// прибавить к а 2, из b вычесть 4, с умножить на 3, d разделить на 10.
{
  let a = 5;
  let b = 10;
  let c = 15;
  let d = 20;

  // Example a += 8
  // Пиши код ниже этой строки
  a += 2;
  b -= 4;
  c *= 4;
  d /= 10;

  // Пиши код выше этой строки

  console.log('a: ', a);
  console.log('b: ', b);
  console.log('c: ', c);
  console.log('d: ', d);
}

/* *** Task 17 *** */
// Дописать функцию makeTransaction,
// Вычислить значение totalPrice. При условии если totalPrice больше customerCredits
// выводится сообщение 'Недостаточно средств на счету!'. В противном случае
// с помощью шаблонной строки `${}` выведите информацию о количестве купленных дронов
// и остатке на счету.
// Функция должна возвращать message.
{
  function makeTransaction(pricePerDrone, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
    let totalPrice = (pricePerDrone * orderedQuantity);
    if (totalPrice > customerCredits) {
      message = 'Недостаточно средств на счету!';
    } else {
      message = `Вы купили ${orderedQuantity} дронов, на счету осталось ${customerCredits - totalPrice} кредитов`;
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 17: ', makeTransaction(11, 5, 200));
  console.log('Task 17: ', makeTransaction(7, 10, 50));
}

/* *** Task 18 *** */
// Дописать функцию checkPassword,
// если password равен null, присвоить переменной message 'Отменено пользователем!'.
// Если строка password равна ADMIN_PASSWORD, присвоить переменной message 'Добро пожаловать!'.
// В противном случае 'Доступ запрещен, неверный пароль!'.
// Функция должна возвращать message.
{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    /* Дополни эту строку */ if (password === null ) {
      message = 'Отменено пользователем!';
      /* Дополни строку ниже*/
    } else if (password === ADMIN_PASSWORD) {
      message = 'Добро пожаловать!';
    } else {
      message = 'Доступ запрещен, неверный пароль!';
    }

    return message;
  }

  console.log('Task 18: ', checkPassword(null));
  console.log('Task 18: ', checkPassword('jqueryismyjam'));
  console.log('Task 18: ', checkPassword('jsismyjam'));
}

/* *** Task 19 *** */
// Дописать функцию checkStorage,
// В случае если ordered равно 0, записать в message 'В заказе еще нет товаров',
// дописать остальные условия в блокe else if.
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    if (ordered === 0) {
      message = 'В заказе еще нет товаров';
    } else if (ordered > available) {
      message = `Слишком большой заказ, на складе недостаточно товаров! В наличии есть только ${available} штук`;
    } else {
      message = 'Заказ оформлен, с вами свяжется менеджер';
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 19: ', checkStorage(5, 0));
  console.log('Task 19: ', checkStorage(11, 5));
  console.log('Task 19: ', checkStorage(7, 10));
}

/* *** Task 20 - *** */
// Дописать функцию isNumberInRange,
// Функция определяет находится ли переданное число в указанном числовом диапазоне.
// Функция должна возвращать isInRange.
{
  function isNumberInRange(start, end, number) {
    let isInRange;
    if (number >= start && number <= end) {
      isInRange = true;
    }
    else {
      isInRange = false
    } // дополни эту строку

    return isInRange;
  }

  console.log('Task 20: ', isNumberInRange(11, 20, 5));
  console.log('Task 20: ', isNumberInRange(11, 30, 21));
  console.log('Task 20: ', isNumberInRange(11, 40, 100));
}

/* *** Task 21 -*** */
// Дописать функцию checkIfCanAccessContent,
// Функция определяет есть ли соответствует переданный аргумент subType значениям 'pro' или 'vip'.
// Функция должна возвращать canAccessContent.
{
  function checkIfCanAccessContent(subType) {
    let canAccessContent = false; // дополни эту строку
    if (subType === 'pro' || subType ==='vip') {
      return canAccessContent = true
    }

    return canAccessContent;
  }

  console.log('Task 21: ', checkIfCanAccessContent('basic'));
  console.log('Task 21: ', checkIfCanAccessContent('pro'));
  console.log('Task 21: ', checkIfCanAccessContent('vip'));
}

/* *** Task 22 -*** */
// Дописать функцию isNumberNotInRange,
// Функция определяет находится ли переданное число вне указанного числового диапазона.
// Функция должна возвращать isNotInRange.
{
  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Дополни эту строку

    return isNotInRange;
  }

  console.log('Task 22: ', isNumberNotInRange(11, 22, 5));
  console.log('Task 22: ', isNumberNotInRange(11, 30, 21));
  console.log('Task 22: ', isNumberNotInRange(11, 40, 100));
}

/* *** Task 23 -*** */
// Дописать функцию getDiscount,
// Если totalSpent больше или равен 50000, дисконт - GOLD_DISCOUNT.
// Если totalSpent больше/равен 20000 и меньше 50000, дисконт - SILVER_DISCOUNT.
// Если totalSpent больше/равен 5000 и меньше 20000, дисконт - BRONZE_DISCOUNT.
// Функция должна возвращать isNotInRange.
{
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки
    // console.log(5000 <= totalSpent && totalSpent < 20000);
    if (totalSpent < 5000) {
      discount = BASE_DISCOUNT;
    } else if (5000 <= totalSpent && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
    } else if (20000 <= totalSpent && totalSpent < 50000) {
      discount = SILVER_DISCOUNT;
    } else {
      discount = GOLD_DISCOUNT;
    }
    // Пиши код выше этой строки
    return discount;
  }

  console.log('Task 23: ', getDiscount(55000));
  console.log('Task 23: ', getDiscount(30000));
  console.log('Task 23: ', getDiscount(1000));
  console.log('Task 23: ', getDiscount(6000));
}

/* *** Task 24 +*** */ 
// Дописать функцию checkStorage используя тернарный оператор.
// Если ordered больше available, присвоить переменной message 'На складе недостаточно товаров!'.
// В противном случае 'Заказ оформлен, с вами свяжется менеджер'.
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    message =  ordered >= available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер' ;
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 24: ', checkStorage(55, 11));
  console.log('Task 24: ', checkStorage(3, 10));
}
