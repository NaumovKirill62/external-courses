function inputStringInString(rawMainSring, inputString, value) {
  let mainSring = [];
  
  if (value === 0) {
    mainSring = rawMainSring.split(' ');
    mainSring.unshift(inputString);
  }
  if (value === rawMainSring.split(' ').length){
    mainSring = rawMainSring.split(' ');
    mainSring.push(inputString);
  } else {
    mainSring = rawMainSring.split(' ').slice(0, value + 1);
    mainSring.push(inputString);
    mainSring.push(rawMainSring.split(' ').slice(value + 1,rawMainSring.length));
  }

  return mainSring.join(' ');
}

module.exports = inputStringInString;
