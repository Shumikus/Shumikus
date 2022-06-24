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