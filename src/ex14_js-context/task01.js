function Calculator() {
  this.result = 0;
  this.add = (elem) => {
    this.result += elem;
    return this;
  };
  this.subtract = (elem) => {
    this.result -= elem;
    return this;
  };
  this.divide = (elem) => {
    this.result /= elem;
    return this;
  };
  this.multiply = (elem) => {
    this.result *= elem;
    return this;
  };
  this.reset = () => {
    this.result = 0;
    return this;
  };
 this.getResult = () => {
    return this.result;
  };
  this.fetchData = () => {
    return (this.result = 500);
  }
};

const result = new Calculator();
module.exports = result;
