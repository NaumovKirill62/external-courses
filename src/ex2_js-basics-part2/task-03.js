function CountArray(myArray) {
  let numberOfOddNumbers = 0;
  let numberOfEvenNumbers = 0;
  let numbersOfZero = 0 ;

  for (let i = 0 ; i < myArray.length ; i += 1) {
    if (typeof myArray[i] === 'number') {
        if (myArray[i] === 0) {
          numbersOfZero = numbersOfZero + 1;
        } else if (myArray[i] % 2 !== 0) {
          numberOfOddNumbers = numberOfOddNumbers + 1;
        } else {
          numberOfEvenNumbers = numberOfEvenNumbers + 1;
        }
    };
  };

  return [numberOfEvenNumbers, numberOfOddNumbers, numbersOfZero];
};
module.exports = CountArray
