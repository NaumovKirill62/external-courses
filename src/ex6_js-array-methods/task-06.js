function reduce(array, callback, initialValue) {
  let previousValue;
  
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
