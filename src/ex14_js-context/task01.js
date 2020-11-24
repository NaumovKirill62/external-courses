const Calculator = {
  result: 0,
  add(elem) {
    this.result += elem;
    return this;
  },
  subtract(elem) {
    this.result -= elem;
    return this;
  },
  divide(elem) {
    this.result /= elem;
    return this;
  },
  multiply(elem) {
    this.result *= elem;
    return this;
  },
  reset() {
    this.result = 0;
    return this;
  },
  getResult() {
    return this.result;
  },
  fetchData() {
    return (this.result = 500);
  }
};

module.export = Calculator();
