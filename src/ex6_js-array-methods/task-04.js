function filter(array, callback) {
  let newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = filter;
