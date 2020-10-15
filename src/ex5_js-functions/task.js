function Calculator() {
  this.result = 0;

  this.add = (a = 0) => {
    this.result += a;
   
    return this.add;
  };

  this.subtract = (a = 0) => {
    this.result -= a;

    return this.subtract;
  };

  this.divide = (a = 1) => {
    this.result /= a;

    return this.divide;
  };

  this.multiply = (a = 1) => {
    this.result *= a;

    return this.multiply;
  };

  this.getResult = () => {
    return this.result;
  };

  this.reset = () => {
    this.result = 0;

    return this.result;
  };
}

const calc = new Calculator();

module.exports = calc;
