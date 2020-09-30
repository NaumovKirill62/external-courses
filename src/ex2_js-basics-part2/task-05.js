function maxValueArray(myArray) {
  let maxValue = myArray[0];
  for ( let i = 1 ; i < myArray.length ; i += 1) {
    if ( myArray[i] > maxValue ) {
      maxValue = myArray[i];   
    };
  };
  
  return maxValue;
};

module.exports = maxValueArray
