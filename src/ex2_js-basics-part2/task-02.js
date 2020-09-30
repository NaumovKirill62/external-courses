function scanArray(myArray) {
  for (let i = 0 ; i < myArray.length ; i += 1) {
    console.log(myArray[i]);
  }  
  console.log(`Длинна массива ${myArray.length}`);
  return;
};

module.exports = scanArray;
