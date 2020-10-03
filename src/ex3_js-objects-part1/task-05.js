function cloneObject(obj) {
  let clone = {}
  
  Object.assign(clone,obj);
  
  return clone;
};

module.exports = cloneObject;