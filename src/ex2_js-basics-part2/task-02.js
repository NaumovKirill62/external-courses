let MyArray = [1, 2, 3];
function scanArray(MyArray) {
  for (let i = 0 ; i < MyArray.length ; i += 1) {
    console.log(MyArray[i]);
    continue;
  };  
  console.log(`Длинна массива ${ MyArray.length }`);
  return;
};
ScanArray(MyArray);
module.exports = scanArray
