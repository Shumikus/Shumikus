/* *** Task 25 *** */
// Дописать функцию checkPassword используя тернарный оператор.
// Если строка password равна ADMIN_PASSWORD, присвоить переменной message 'Доступ разрешен'.
// В противном случае 'Доступ запрещен, неверный пароль!'.
// Функция должна возвращать message.
{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    // Пиши код ниже этой строки
    message = ADMIN_PASSWORD === password ? 'Доступ разрешен' : 'Доступ запрещен, неверный пароль!' ;
    return message;
    // Пиши код выше этой строки
  }

  console.log('Task 25: ', checkPassword('jqueryismyjam'));
  console.log('Task 25: ', checkPassword('jsismyjam'));
}

/* *** Task 26 *** */
// Дописать функцию getSubscriptionPrice используя конструкцию switch.
// starter: price 0
// professional: price 20.
// organization: price 50.
// Функция должна возвращать price.
{
  function getSubscriptionPrice(type) {
    let price;
    // Пиши код ниже этой строки

    switch (
      type // Дополни эту строку
    ) {
      case 'starter': // Дополни эту строку
        price = 0; // Дополни эту строку
        break;

      case 'professional': // Дополни эту строку
        price = 20; // Дополни эту строку
        break;

      case 'organization': // Дополни эту строку
        price = 50; // Дополни эту строку
        break;
    }

    // Пиши код выше этой строки
    return price;
  }

  console.log('Task 26: ', getSubscriptionPrice('starter'));
  console.log('Task 26: ', getSubscriptionPrice('professional'));
  console.log('Task 26: ', getSubscriptionPrice('organization'));
}

/* *** Task 27 *** */
// Дописать функцию checkPassword используя конструкцию switch.
// если null: 'Отменено пользователем!'
// если ADMIN_PASSWORD: 'Добро пожаловать!'
// Функция должна возвращать message.
{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    switch (password) {
      case null:
        message = 'Отменено пользователем!';
        break;
      case ADMIN_PASSWORD:
        message = 'Добро пожаловать!';
        break;
      default:
        message = 'Доступ запрещен, неверный пароль!';
    }
    return message;
  }

  console.log('Task 27: ', checkPassword('jqueryismyjam'));
  console.log('Task 27: ', checkPassword(null));
  console.log('Task 27: ', checkPassword('qwerty123'));
}

/* *** Task 28 *** */
// Дописать функцию getShippingCost используя конструкцию switch.
// Для 4 стран (Китай, Чили, Ямайка, Австралия) при помощи шаблонных строк
// ${} записать в message строку вида `Доставка в *Название страны* будет стоить *Любое число* кредитов`
// Функция должна возвращать message.
{
  function getShippingCost(country) {
    let message;
    // Пиши код ниже этой строки
    switch (country) {
      case 'Китай':
        message = `Доставка в ${country} будет стоить 100 кредитов`;
        break;
       case 'Чили':
        message = `Доставка в ${country} будет стоить 190 кредитов`;
        break;
       case 'Австралия':
        message = `Доставка в ${country} будет стоить 250 кредитов`;
        break;
       case 'Ямайка':
        message = `Доставка в ${country} будет стоить 210 кредитов`;
        break;
      default:
        message = 'Извините, ОРКАМ доставки нет!';
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 28: ', getShippingCost('Китай'));
  console.log('Task 28: ', getShippingCost('Чили'));
  console.log('Task 28: ', getShippingCost('Австралия'));
  console.log('Task 28: ', getShippingCost('Ямайка'));
  console.log('Task 28: ', getShippingCost('Мордор'));
}

/* *** Task 29 *** */
// Дописать функцию getNameLength .
// Функция должна возвращать message.
{
  function getNameLength(name) {
    const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку
    
    return message;
  }

  console.log('Task 29: ', getNameLength('Иван'));
  console.log('Task 29: ', getNameLength('Ипполит'));
}

/* *** Task 30 *** */
// courseTopicLength - длина строки courseTopic.
// firstElement - первый элемент строки courseTopic.
// lastElement - последний элемент строки courseTopic.
{
  const courseTopic = 'JavaSсript для профессионалов';
  // Пиши код ниже этой строки

  const courseTopicLength = courseTopic.length;
  const firstElement = courseTopic.slice(0,1);
  const lastElement = courseTopic.slice(-1);

  // Пиши код выше этой строки

  console.log('Task 30: ', courseTopicLength, firstElement, lastElement);
}

/* *** Task 31 *** */
// Дописать функцию getSubstring .
// Функция обрезает переданную строку с начала до указанной длины (параметр length)
// Функция должна возвращать substring.
{
  function getSubstring(string, length) {
    const substring = string.substring(0,length); // Дополни эту строку

    return substring;
  }

  console.log('Task 31: ', getSubstring('Привет! Я JavaSсript!', 7));
}

/* *** Task 32 *** */
// Дописать функцию formatMessage .
// Функция проверяет длину message, и если message больше maxLength,
// то обрезает переданную строку с начала до указанной длины (параметр maxLength)
// и добавляет в конце три точки '...' и записывает в result
// Если длина message не больше maxLength, то записывает в result весь message.
// Функция должна возвращать result.
{
  function formatMessage(message, maxLength) {
    let result;
    // Пиши код ниже этой строки
    if (message.length <= maxLength) {
      result = message;
    } else {
      result = message.slice(0, maxLength) + '...';
    }
    // Пиши код выше этой строки
    return result;
  }

  console.log(
    'Task 32: ',
    formatMessage('Привет! Я JavaSсript! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 20)
  );

  console.log(
    'Task 32: ',
    formatMessage('Привет! Я JavaSсript! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 15)
  );
}

/* *** Task 33 *** */
// Дописать функцию normalizeInput .
// Функция возвращает строку в нижнем регистре.
{
  function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Дополни эту строку
    return normalizedInput;
  }

  console.log('Task 33: ', normalizeInput('Привет! Я JavaSсript!'));
}

/* *** Task 34 *** */
// Дописать функцию checkForName .
// Функция проверяет встречается ли в строке fullName name.
// Возвращает логическое значение.
{
  function checkForName(fullName, name) {
    const result = fullName.includes(name); // Дополни эту строку
    return result;
  }

  console.log('Task 34: ', checkForName('John Doe', 'Doe'));
  console.log('Task 34: ', checkForName('Peter Brown', 'Jack'));
}

/* *** Task 35 *** */
// Дописать функцию checkForSpam .
// Функция проверяет встречается ли в строке message подстрока 'spam' или 'sale'.
// Без учета регистра!
// Возвращает логическое значение.
{
  function checkForSpam(message) {
    let result;
    // Пиши код ниже этой строки
    if (
      message.includes('spam') ||
      message.includes('sale')) {
      result = true;
    } else {
      result = false;
    }

    // Пиши код выше этой строки
    return result;
  }

  console.log('Task 35: ', checkForSpam('Привет! Я spamSсript!'));
  console.log('Task 35: ', checkForSpam('This is the best sale!'));
  console.log('Task 35: ', checkForSpam('Привет! Я JavaSсript!'));
}
