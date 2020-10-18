function slice(array, first, last) {
  let newArray = [];
  let begin = Number(first);
  let end = Number(last);

  if (isNaN(end)){
    end = array.length;
  }

  if (isNaN(begin)) {
    begin = 0;
  }

  if (begin < 0) {
    begin = array.length + begin;
  }

  if (end < 0){
    end = array.length + end;
  }

  for (var i = begin; i < end; i++){
    if (array[i]) {
    newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = slice;
