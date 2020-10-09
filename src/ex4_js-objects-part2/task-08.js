function lowerCamelCase (rawStr) {
    let str = String(rawStr);
    
    str = str.trim().split(" ");
    str[0] = str[0].toLowerCase();
    for (let i = 1; i <str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        for (let k = 1; k < str[i].length; k++){
            str[i][k] = str[i][k].toLowerCase();
        }
        str[i] = str[i].join('');
    }
    str = str.join('');
    return String(str);
};

module.exports = lowerCamelCase;
