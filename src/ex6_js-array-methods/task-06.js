function reduce(array, callback, initialValue) {
  let previousValue;
  let i;
  
  if (typeof initialValue === "undefined") {
    previousValue = array[0];
    i = 1;
  }
  
  if (typeof initialValue !== "undefined") {
    previousValue = initialValue;
    i = 0;
  }

  for (i; i < array.length; i++){
    previousValue = callback(previousValue, array[i], i, array); 
  }
  
  return previousValue;
}

module.exports = reduce;
