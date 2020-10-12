function upperString (value) {
    let str = String(value);

    str = str.trim().split(" ");
    for (let i = 0; i <str.length; i++) {
        str[i]= str[i].split('');
        str[i][0]=str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    str = str.join(' ');
    
    return String(str);
  }

module.exports = upperString;
