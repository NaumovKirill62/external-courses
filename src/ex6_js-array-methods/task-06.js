// ## Задание №6 💪

// Написать функцию-аналог метода reduce(array, callback, initialValue). 
// Функция применяет функцию callback(previousValue, currentItem, i, array) по очереди к каждому элементу массива слева направо, 
// сохраняя при этом промежуточный результат previousValue. Функция возвращает значение - итоговый результат свёртки массива. 
// Если аргумент initialValue есть, то на первом вызове значение previousValue будет равно initialValue. Если аргумента initialValue нет, 
// то previousValue равно первому элементу массива, а перебор начинается со второго.

function reduce(array, callback, initialValue){
  let previousValue;
  let result;
  
  if (typeof initialValue === "undefined") {
    previousValue = array[0];
    for (var i = 1; i < array.length; i++){
        previousValue = callback(previousValue, array[i], i, array); 
    }

    return previousValue;
  } 
  
  if (typeof initialValue !== undefined) {
    previousValue = initialValue;
    for (var j = 0; j < array.length; j++){
        previousValue = callback(previousValue, array[j], j, array); 
    }

    return previousValue;
  }

  return previousValue;
}

module.exports = reduce;
