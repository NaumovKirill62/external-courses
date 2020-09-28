function EqualValues(myArray) {
  for (let i = 0 ; i < (myArray.length - 1) ; i += 1) {
    if (myArray[i] === myArray[i + 1]) {
      return true;
    };    
    return false;
  };
};
const arr = [0, 1];
EqualValues(arr);
module.exports = EqualValues
