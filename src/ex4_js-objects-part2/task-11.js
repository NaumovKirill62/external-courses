function countSymbol(inputValue) {
  const inputString = inputValue.split('');
  const output = {};
  
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
