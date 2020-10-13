function lowerCamelCase (rawStr) {
  let str = rawStr;
    
  str = str.trim().split(" ");
  str[0] = str[0].toLowerCase();
    for (let i = 1; i <str.length; i++) {
      str[i] = str[i].toLowerCase();
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);

    }
  str = str.join('');

  return String(str);
}

module.exports = lowerCamelCase;
