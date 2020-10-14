function upperString (rawString) {
    let resultString = rawString.trim().split(" ");
    
    for (let i = 0; i < resultString.length; i++) {
      resultString[i] = resultString[i][0].toUpperCase() + resultString[i].slice(1, resultString[i].length);
    }

    return resultString.join(' ');
  }

module.exports = upperString;
