function firstSymbol (value) {
  let str = value;
  let result;

  str = str.trim().split("");
  str[0] = str[0].toUpperCase();
  result = str.join('');
    
  return String(result);   
}

module.exports = firstSymbol;
