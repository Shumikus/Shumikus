/* *** Task 13 *** */
// Отредактировать функцию makeArray
// Функция объединяет firstArray и secondArray, и обрезает объединенный массив до maxLength.
// Функция должна возвращать результирующий массив.
{
  function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
    const allArguments = firstArray.concat(secondArray);
    return allArguments.splice(0, maxLength);
    // Пиши код выше этой строки
  }

  console.log('Task 13: ', makeArray([1, 2, 3], [4, 5, 6, 7], 5));
  console.log('Task 13: ', makeArray([11, 22, 33, 44], [15, 16, 17], 3));
}

/* *** Task 14 *** */
// Отредактировать код в цикле for так, чтобы в консоль выводились числа от start до end.
{
  // console.log('Task 14: ');
  const start = 3;
  const end = 7;

  // // Раскомментируй код цикла
  for (let i = start; i <= end; i += 1) { // Дополни эту строку
   console.log('Task 14: ', i);
  }
}


/* *** Task 15 *** */
// Дописать функцию calculateTotal.
// функция в цикле считает сумму всех чисел до переданного значения параметра.
// То есть, передали number = 5. sum = 1 + 2 + 3 + 4 + 5.
// Функция должна возвращать sum.
{
  function calculateTotal(number) {
    // Пиши код ниже этой строки
    let sum = 0;

    // Раскомментируй код цикла
    for (let i = sum; i <= number; i++ ) {
    sum += i;
    }

    return sum;
    
    // Пиши код выше этой строки
  }

  console.log('Task 15: ', calculateTotal(7));
  console.log('Task 15: ', calculateTotal(11));
}


/* *** Task 16 *** */
// В цикле вывести в консоль все элементы массива по одному.
{
  console.log('Task 16: ');
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  
  for (let i = 0; i <= fruits.length -1; i++ ) {
  
  console.log(fruits[i]);
  }
}

/* *** Task 17 *** */
// Дописать функцию calculateTotalPrice,
// Вычислить значение total. order - это массив чисел в заказе.
// В цикле нужно посчитать общую стоимость заказа.
// Функция должна возвращать total.
{
  function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки
    for (let i = 0; i < order.length; i += 1) {
      total += order[i];
    }

    return total;
    // Пиши код выше этой строки
  }

  console.log('Task 17: ', calculateTotalPrice([11, 5, 200, 16, 84])); // 316
  console.log('Task 17: ', calculateTotalPrice([7, 10, 50, 2, 14])); // 83
}

/* *** Task 18 *** */
// Дописать функцию findLongestWord,
// Функция в цикле должна находить самое длинное слово в строке.
// Функция должна возвращать word.
{
  function findLongestWord(string) {
    // Пиши код ниже этой строки
      let word = '';
      let spliter = string.split(' ');
      let array = [];


    for (let i = 0; i < spliter.length; i += 1) {
        // console.log(spliter[i]);
        if (spliter[i].length > word.length) {
            word = spliter[i];
            array = [spliter[i]];
        }        
 
    }
    
    return word;
    
    // Пиши код выше этой строки
  }
  
  console.log('Task 18: ', findLongestWord("Hello! I'm JavaScript! The best language!"));
  console.log('Task 18: ', findLongestWord('My name in Computer. I can do some calculations.'));
}

/* *** Task 19 *** */
// Дописать функцию createArrayOfNumbers,
// Функция принимает минимальное и максимальное значения и заполняет в цикле
// массив numbers значениями от min до max включительно. То есть: передаем 14, 20, должно вернуть [14, 15, 16, 17, 18, 19, 20]
// Функция должна возвращать numbers.
{
  function createArrayOfNumbers(min, max) {
    const numbers = [];
    // const item = max - min;
      
    // Пиши код ниже этой строки
    for (let i = 0; i > max - min; i++) {
        
      numbers.push(numbers[i] + 1);
    
      // console.log(result);
    }
    
    return numbers;
  }

  // Пиши код выше этой строки
  

  console.log('Task 19: ', createArrayOfNumbers(1, 6));
  console.log('Task 19: ', createArrayOfNumbers(9, 13));
  console.log('Task 19: ', createArrayOfNumbers(90, 103));
}
/* *** Task 20 *** */
// Дописать функцию filterArray,
// Функция принимает массив чисел numbers и значение value.
// В цикле проверяется каждое значение numbers и если оно больше value,
// то записывается в новый массив newArr
// Функция должна возвращать newArr.
{
  function filterArray(numbers, value) {
    const newArr = [];
    // Пиши код ниже этой строки
      for (let number of numbers) {
          if (number > value) {
              newArr.push(number);

          }
      }
    // Пиши код выше этой строки
    return newArr;
  }

  console.log('Task 20: ', filterArray([11, 15, 16, 22], 15)); // [16, 22]
  console.log('Task 20: ', filterArray([101, 85, 77, 34, 121], 100)); // [101, 121]
  console.log('Task 20: ', filterArray([11, 15, 17, 14, 12], 20)); // []
}

/* *** Task 21 *** */
// Дописать функцию checkFruit,
// Функция определяет есть ли в массиве fruits переданное значение fruit.
// Функция должна возвращать значение Boolean.
{
  function checkFruit(fruit) {
    const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

    return fruits.includes(fruit); // Дополни эту строку
  }

  console.log('Task 21: ', checkFruit('персик'));
  console.log('Task 21: ', checkFruit('груша'));
}

/* *** Task 22 *** */
// Дописать функцию getCommonElements,
// Функция возвращает массив с общими элементами из двух переданных массивов
// (т.е. те элементы, которые присутствуют и в первом, и во втором массивах).
// Функция должна возвращать массив.
{
  function getCommonElements(array1, array2) {
    const uniqueElement = []; 
    for (const element of array1) {
        if (array2.includes(element)) {
            uniqueElement.push(element);
        }
    }
    return uniqueElement;
      
  }

  console.log('Task 22: ', getCommonElements([11, 22, 5], [14, 17, 16])); // []
  console.log('Task 22: ', getCommonElements([11, 30, 21], [13, 51, 21, 56])); // [21]
  console.log('Task 22: ', getCommonElements([11, 40, 100, 1, 3, 5, 15], [40, 12, 101, 100, 5])); // [40, 100, 5]
}

/* *** Task 23 *** */
// Дописать функцию calculateTotalPrice,
// Используя цикл for... of... подсчитать общую стоимость total в массиве стоимостей заказа.
// Функция должна возвращать total.
{
  function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки
    for (const ord of order) {
        total += ord;
    }
    // Пиши код выше этой строки
    return total;
  }

  console.log('Task 23: ', calculateTotalPrice([1000, 200, 50, 200])); // 1450
  console.log('Task 23: ', calculateTotalPrice([300, 100, 75, 200])); // 675
}

/* *** Task 24 *** */
// Дописать функцию filterArray.
// Функция принимает массив чисел numbers и значение value.
// В цикле for... of... проверяется каждое значение numbers и, если оно больше value,
// записывается в новый массив newArr
// Функция должна возвращать newArr.
{
  function filterArray(numbers, value) {
    // Пиши код ниже этой строки
    const newArr = [];
    for (const number of numbers) {
        if (number > value) {
            newArr.push(number);
    }
    }

    return newArr;
    // Пиши код выше этой строки
  }

  console.log('Task 24: ', filterArray([11, 10, 15, 16, 22, 18], 15)); // [16, 22, 18]
  console.log('Task 24: ', filterArray([101, 85, 77, 50, 41, 34, 121, 200], 100)); // [101, 121, 200]
  console.log('Task 24: ', filterArray([11, 15, 17, 14, 12, 18], 20)); // []
}