function lowerCamelCase (str) {  
  const lowerCaseString = str.toLowerCase().split(' ');
  lowerCaseString[0] = lowerCaseString[0].toLowerCase();
    
  for (let i = 1; i <lowerCaseString.length; i++) {
    lowerCaseString[i] = lowerCaseString[i][0].toUpperCase() + lowerCaseString[i].slice(1);

  }

  return lowerCaseString.join('');
}

module.exports = lowerCamelCase;
