function some(array, Callback) {
  for (var i = 0; i < array.length; i++) {
    if (Callback(array[i], i, array) === true) {
      return true;
    }
 }

  return false;
}

module.exports = some;
