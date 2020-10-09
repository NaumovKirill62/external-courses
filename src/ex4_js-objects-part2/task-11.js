function countSymbol(inputValue) {
  let inputString = inputValue.split('');
  let output = {};
  
  for (var char of inputString) {
      if (output[char]) {
        output[char]++;
      } else {
        output[char] = 1;
      }
  }  
  for (const key in output) {
      if (output.hasOwnProperty(key)) {
          console.log(`${key} ${output[key]}`);
      }
  }
}

module.exports = countSymbol;
