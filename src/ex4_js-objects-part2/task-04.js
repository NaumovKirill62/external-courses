function upperFirstSymbol (rawString) {
  let str = rawString;

  str = str.trim().split("");
  str[0] = str[0].toUpperCase();
    
  return str[0] + rawString.slice(1,str.length);   
}

module.exports = upperFirstSymbol;
