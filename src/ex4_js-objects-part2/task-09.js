

function inputStringInString(rawMainSring, inputString, value) {
  const mainArray = rawMainSring.split(' ');
  let firstString = mainArray.slice(0, value + 1);
  let secondSring = mainArray.slice(value + 1);

  return firstString.concat(inputString, secondSring).join(' ');
}

inputStringInString('I am cool', 'very', 1);

module.exports = inputStringInString;
