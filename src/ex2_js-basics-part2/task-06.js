function testValue(numb) {
  if (numb === 0 || numb === 1) {
    return `${numb} не является простым или составным числом`
  }

  if (numb > 1 && numb < 1000) {
    if (numb === 2) return `Число ${numb} - простое число`;
    
    for (let i = 2; i < numb; i++) {
      if ( numb % i === 0) {
        return `Число ${numb} - составное число`;
      }
    }
    
    return `Число ${numb} - простое число`;
  }

    return `Данные неверны`
};

module.exports = testValue;
