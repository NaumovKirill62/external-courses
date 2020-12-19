let arrayWords = ['Иван', 'Николай', 'Петр', 'Василий', 'Федор', 'Максим', 'Дмитрий', 'Илья']

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => { fn.apply(this, arguments)};
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms)
  }
};

function findElement(e) {
  let result = arrayWords.find( (elem) => {
    if (elem === e.target.value) {
      return true;
    }
    return false;
  })
  if (result === undefined) {
    console.log(`${e.target.value} нет в системе !`);
    return
  }
  console.log(`${result} есть в системе`)
  
};

findElement = debounce(findElement, 1500);

document.getElementById('search').addEventListener('keyup', findElement);

