function typeOfNumber (inputValue) {
  if (inputValue === 0 || inputValue === 1) {
    return `Число ${ inputValue } - простое число` ;
  };
  if ((inputValue > 1) && (inputValue < 1000)) {
    for (var i = 2 ; i < inputValue ; i += 1){
      if (inputValue%i === 0) {
        return `Число ${ inputValue } - составное число`;
      };
      if (inputValue % i > 0) {
        return `Число ${ inputValue } - простое число` ;
      };
    };
  };
  return 'Данные неверны'; 
};
module.exports = typeOfNumber
