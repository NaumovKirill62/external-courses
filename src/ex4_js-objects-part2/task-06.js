function upperString (rawString) {
    let resultString = rawString;

    resultString = resultString.trim().split(" ");
    for (let i = 0; i < resultString.length; i++) {

      resultString[i] = resultString[i][0].toUpperCase() + resultString[i].slice(1, resultString[i].length);
    }

    resultString = resultString.join(' ');
    
    return resultString;
  }

module.exports = upperString;
