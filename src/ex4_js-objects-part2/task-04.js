function firstSymbol (value) {
 let str = String(value);
    str = str.trim().split("");
    str[0] = str[0].toUpperCase();
    str = str.join('');
    
    return String(str);   
};

module.exports = firstSymbol;
