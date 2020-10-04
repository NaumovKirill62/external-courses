function compositionOfObject(obj) {
  if (typeof obj === 'object'){
    for (let key in obj) {
      console.log(key, obj.key);
    }
  }

  return;
}

module.exports = compositionOfObject;
