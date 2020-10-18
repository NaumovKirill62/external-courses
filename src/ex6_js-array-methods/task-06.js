function reduce(array, callback, initialValue) {
  let previousValue;
  let i;
  
  if (initialValue === undefined) {
    previousValue = array[0];
    i = 1;
  } else {
    previousValue = initialValue;
    i = 0;
  }

  for (i; i < array.length; i++){
    previousValue = callback(previousValue, array[i], i, array); 
  }
  
  return previousValue;
}

module.exports = reduce;
