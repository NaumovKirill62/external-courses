function CristmasGift (...candys) {
  this.heap = [];
  if (Array.isArray(candys)) {
    this.heap.push(...candys);
  };
  this.addCandy = function (candy) {
    this.heap.push(candy);
  };
  this.mass = function() {
    let result = 0;
    this.heap.forEach(function (elem) {
      result += elem.mass();
      return result;
    });
    return result;
  };
  this.searchcnady = function (value) {
    let findElem = this.heap.find(function (elem) {
      if(elem.name === value) {
        return true;
      }
      return false;
    })
    return findElem === undefined ? null : findElem ;
  };
  this.sortByName = function() {
    return this.heap.sort((a, b) => a.name > b.name ? 1 : -1);
  };
  this.sortByNumber = function() {
    return this.heap.sort((a, b) => a.number > b.number ? 1 : -1);
  };
  this.sortByWeight = function() {
    return this.heap.sort((a, b) => a.mass() > b.mass() ? 1 : -1);
  };
}

function Candys(name, number, weight) {
  this.name = name;
  this.number = number;
  this.weight = weight;
};
function Candy () {
  this.mass = function() {
    return (this.number * this.weight);
  }
}
Candys.prototype = Candy;
const candy1 = new Candys('Chokolate Candy\'s', 5, 10);
const candy2 = new Candys('Baunty', 3, 30);
const candy3 = new Candys('Mars', 2, 20);
const giftForChild = new CristmasGift(candy1, candy2, candy3);