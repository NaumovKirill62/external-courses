function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
     
  return true;
}

module.exports = every;
