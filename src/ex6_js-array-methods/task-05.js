// ## Задание №5

// Написать функцию-аналог метода map(array, callback) для трансформации массива. 
// Функция возвращает новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента array.
function map(array, callback){
  let newArray = [];
  
  for (var i = 0; i < array.length; i++){
      newArray.push(callback(array[i], i, array));
  }
  
    return newArray;
}

module.exports = map;
