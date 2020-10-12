function inputStringInString(rawMainSring, inputString, value) {
  let mainSring = rawMainSring.split(' ');
  let num = value;
  
  if (num = 0) {
      mainSring[0] = inputString.concat(mainSring[0]);
  }

  if (num = mainSring.length) {
      mainSring[num -1] = inputString.concat(" ", mainSring[num -1]);
  } else {
      mainSring[num - 1] = mainSring[num - 1].concat(inputString, " ") ;
  };
  
  mainSring = mainSring.join(' ');
  
  return mainSring;
}

module.exports = inputStringInString;
