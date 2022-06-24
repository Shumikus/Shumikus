/* *** Task 25 *** */
// Используя оператор % - остаток от деления,
// нужно вписать недостающий операнд так,
// чтобы результат вычисления был равен ответу в комментарии
// Пример:
// const a = _ % 5; // 4
// вместо _ пишем 9
{
  const a = 3 % 3; // 0
  const b = 7 % 3; // 1
  const c = 11 % 4; // 3
  const d = 26 % 7; // 5
  const e = 8 % 3; // 2
  const f = 22 % 9; // 4
  console.log('Task 25: ', a, b, c, d, e, f);
}

/* *** Task 26 *** */
// Дописать функцию getEvenNumbers.
// Функция возвращает массив со всеми четными элементами, которые входят в диапазон от start до end
// Используйте цикл for.
// Функция должна возвращать arr.
{
  function getEvenNumbers(start, end) {
    const arr = [];
    // Пиши код ниже этой строки
      for (let i = start; i <= end; i += 1)
          if (i % 2 === 0) {
              arr.push(i);
          }
    // Пиши код выше этой строки
    return arr;
  }

  console.log('Task 26: ', getEvenNumbers(1, 10)); // [ 2, 4, 6, 8, 10 ]
  console.log('Task 26: ', getEvenNumbers(13, 21)); // [ 14, 16, 18, 20 ]
  console.log('Task 26: ', getEvenNumbers(105, 109)); //[ 106, 108 ]
}

/* *** Task 27 *** */
// В цикле for в указанном диапазоне от start до end нужно вернуть ПЕРВОЕ число, которое в остатке от деления на 5 даст 0.
// Используйте break, чтобы остановить выполнение цикла.
{
  const start = 6;
  const end = 27;
    let number = '';
    
    for (let i = start; i <= end; i += 1)
        if (i % 5 === 0) {
            number = i;
            break
        }

  console.log('Task 27: ', number); // 10
}

/* *** Task 28 *** */
// В цикле for в указанном диапазоне от start до end нужно найти ПОСЛЕДНЕЕ число, которое  в остатке от деления на 7 даст 0.
{
  const start = 6;
  const end = 31;
    let number;
    
    for (let i = start; i <= end; i += 1)
        if (i % 7 === 0) {
            number = i;
        }

  console.log('Task 28: ', number); // 28
}

/* *** Task 29 *** */
// Дописать функцию findNumber .
// Функция принимает 3 параметра
// Аналогично как в задании 27 нужно вернуть ПЕРВОЕ число, которое в остатке от деления на divisor даст 0.
// start - начало цикла, end - конец цикла, divisor - число, остаток от деления на которое даст в результате 0.
// Вместо break используйте return, чтобы выйти из тела цикла и вернуть из функции значения.
{
  function findNumber(start, end, divisor) {
    // Пиши код ниже этой строки
      for (let i = start; i <= end; i += 1){
          if (i % divisor === 0)
              return i;
      }
      
    // Пиши код выше этой строки
  }

  console.log('Task 29: ', findNumber(4, 10, 3)); // 6
  console.log('Task 29: ', findNumber(6, 14, 5)); // 10
}

/* *** Task 30 *** */
// Дописать функцию includes, Используя встроенную функцию массива indexOf и тернарный оператор
// Функция определяет содержит ли массив array переданное значение value.
// Функция должна возвращать логическое значение true/false.
{
  function includes(array, value) {
    // Пиши код ниже этой строки
    
    return array.indexOf(value) !== -1 ? true : false; // Наверно тут уже и так все решено (((((
  }

  console.log('Task 30: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 30: ', includes([6, 14], 5)); // false
}

/* *** Task 31 - 34 *** */
// Самостоятельно реализуйте 4 альтернативные варианта функции includes
// Нельзя использовать встроенные функции массива array.includes, indexOf.
// Можно использовать другие встроенные функции массивов, но один раз для каждого варианта решения.
// Функция должна возвращать логическое значение true/false,
// отвечая на вопрос содержит ли массив array переданное значение value.
{
  function includes(array, value) {
    // Пиши код ниже этой строки
      for (let i = 0; i <= array.length; i += 1){
          if (array[i] === value) {
              return true;

          }
      }
      return false;
  }

  console.log('Task 31: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 31: ', includes([6, 14], 5)); // false
}

{
  function includes(array, value) {
    // Пиши код ниже этой строки
      for (const item of array) {
        for (let i = 0; i <= array.length; i += 1)
          if (array[i] === value) {
              return true;

          }
      }
      return false;
  }

  console.log('Task 31: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 31: ', includes([6, 14], 5)); // false
}