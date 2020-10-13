function delSpace(rawStr) {
  let resultString = rawStr;

  if (resultString[0] === ' ') {
    resultString = resultString.slice(1);
  }
  if (resultString[resultString.length -1] === ' ') {
    resultString = resultString.slice(0, -1);
  }

  return resultString;
}

module.exports = delSpace;
