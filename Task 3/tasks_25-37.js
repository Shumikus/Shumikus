/* *** Task 25 *** */
// Используя оператор spread ...
// распылите массив scores в соответствующие функции встроенного объекта Math
// для получения bestScore и worstScore.
{
  const scores = [89, 64, 42, 17, 93, 51, 26];
  const bestScore = undefined; // Пиши код в этой строке
  const worstScore = undefined; // Пиши код в этой строке

  console.log('Task 25: ', bestScore); // 93
  console.log('Task 25: ', worstScore); // 17
}

/* *** Task 26 *** */
// Используя оператор spread ...
// соберите все значения групп Scores в массив allScores.
// Получите значения bestScore и worstScore из allScores как в предыдущем задании
{
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];

  const allScores = undefined; // Пиши код в этой строке
  const bestScore = undefined; // Пиши код в этой строке
  const worstScore = undefined; // Пиши код в этой строке

  console.log('Task 26: ', allScores);
  console.log('Task 26: ', bestScore); // 97
  console.log('Task 26: ', worstScore); // 14
}

/* *** Task 27 *** */
// Распылите 2 объекта defaultSettings и overrideSettings в finalSettings.
// Выведите объект finalSettings в консоль и обратите внимание, что значения некоторых полей перезаписались.
{
  const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };

  const finalSettings = undefined; // Пиши код в этой строке

  console.log('Task 27: ', finalSettings); // 10
}

/* *** Task 28 *** */
// Допишите функцию makeTask, которая принимает объект с задачей и возвращает
// новый объект с задачей и полями completed, category, priority.
{
  const toDo = {
    task: 'Сделать домашку по JS',
  };

  function makeTask(data) {
    const completed = false;
    const category = 'Общее';
    const priority = 'Обычный';
    // Пиши код ниже этой строки

    // Пиши код выше этой строки
  }

  console.log('Task 28: ', makeTask(toDo));
}

/* *** Task 29 *** */
// Реализовать функцию add.
// Функция принимает неограниченное количество аргументов.
// Для этого используйте оператор rest и arguments функции
// Функция возвращает общую сумму всех переданных аргументов.
{
  function add() {}

  console.log('Task 29: ', add(4, 10, 3)); // 17
  console.log('Task 29: ', add(6, 14, 5, 3, 20)); // 48
}

/* *** Task 30 *** */
// Дописать функцию findMatches.
// Функция принимает первым параметром массив значений, все остальные параметры собираются при помощи оператора rest ... .
// Функция возвращает массив matches, который включает совпадения из переданного массива и остальных параметров.
{
  // Пиши код ниже этой строки
  function findMatches() {
    const matches = []; // Не изменяй эту строку

    // Пиши код выше этой строки
    return matches;
  }

  console.log('Task 30: ', findMatches([4, 3, 2, 5, 17, 10], 8, 24, 10, 11, 3)); // [ 10, 3 ]
  console.log('Task 30: ', findMatches([16, 14, 6, 7], 12, 20, 11, 6)); // [ 6 ]
  console.log('Task 30: ', findMatches([10, 20], 12, 30, 11, 6)); // [ ]
}

/* *** Task 31 *** */
// Реализуйте объект bookShelf - книжная полка.
// В объекте есть массив книг books ['Последнее королевство', 'Страж снов']
// и 4 метода:
// - получить книги: ничего не принимает, метод выводит в консоль 'Возвращаем все книги'
// - добавить книгу: принимает название книги, консолит 'Добавляем книгу ' и название книги
// - удалить книгу: принимает название книги, консолит 'Удаляем книгу ' и название книги
// - обновить книгу: принимает старое название книги, новое название книги,
//   консолит 'Обновляем книгу ' *старое название книги* на *новое название книги*

{
  const bookShelf = {
    // Пиши код здесь
  };

  console.log('Task 31: ', bookShelf);
}

/* *** Task 32 *** */
// Реализуйте функцию updateBook в объекте bookShelf.
// Функция находит в массиве книг books нужную книгу и обновляет ее название.
// для ссылки на массив books объекта bookShelf используйте this

{
  const bookShelf = {
    books: ['Последнее королевство', 'Мгла', 'Страж снов'],
    updateBook(oldName, newName) {
      // Пиши код здесь
    },
  };

  console.log('Task 32: ', bookShelf.updateBook('Мгла', 'Свет'));
  console.log('Task 32: ', bookShelf.books);
}

/* *** Task 33 *** */
// Реализуйте в объекте atTheOldToad массив potions ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
// И метод getPotions, который возвращает все potions.
{
  const atTheOldToad = {
    // Пиши код здесь
  };

  console.log('Task 33: ', atTheOldToad); // дописать вызов метода getPotions
}

/* *** Task 34 *** */
// Реализуйте в объекте atTheOldToad метод addPotion, который добавляет новое зелье в potions.
{
  const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    addPotion(potionName) {
      // Пиши код здесь
    },
  };

  atTheOldToad.addPotion('Аромат скунса');
  console.log('Task 34: ', atTheOldToad.potions);
}

/* *** Task 35 *** */
// Реализуйте в объекте atTheOldToad метод removePotion, который удаляет переданное в качестве аргумента зелье из potions.
{
  const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    removePotion(potionName) {
      // Пиши код здесь
    },
  };
  atTheOldToad.removePotion('Зелье скорости');
  console.log('Task 35: ', atTheOldToad.potions);
}

/* *** Task 36 *** */
// Реализуйте в объекте atTheOldToad метод updatePotionName, который обновляет в potions переданное в качестве аргумента
// зелье на новое (из аргумента 2).
{
  const atTheOldToad = {
    potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    updatePotionName(oldName, newName) {
      // Пиши код здесь
    },
  };
  atTheOldToad.updatePotionName('Зелье скорости', 'Индийский чай');
  console.log('Task 36: ', atTheOldToad.potions);
}

/* *** Task 37 *** */
// Реализуйте в объекте atTheOldToad методы getPotions, addPotion, removePotion, updatePotionName,
// Во всех методах, кроме getPotions, должны быть следующие проверки:
// - в addPotion: если такое зелье уже есть в potions, вернуть строку "Зелье *название зелья* уже есть в инвентаре!"
// - в removePotion и updatePotionName: если такого зелья нет в potions, вернуть строку "Зелья *название зелья* нет в инвентаре!"
// Также ОБЯЗАТЕЛЬНО проверяйте что вам передано в качестве аргументов функции, чтоб вы не записали случайно в массив potions пустой объект
// или не аналогичные данные (массив, строка, число и т.д.)

{
  const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {},
    addPotion(potion) {},
    removePotion(potionName) {},
    updatePotionName(oldName, newName) {},
    // Пиши код выше этой строки
  };

  console.log('Task 37: ', atTheOldToad.addPotion({ name: 'Перо феникса', price: 820 }));
  console.log('Task 37: ', atTheOldToad.removePotion('Каменная кожа'));
  console.log('Task 37: ', atTheOldToad.updatePotionName('Зелье скорости', 'Индийский чай'));
  console.log('Task 37: ', atTheOldToad.getPotions());
}
