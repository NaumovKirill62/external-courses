function propertyInObject(key,obj) {
  const prototypeOfObject = Object.getPrototypeOf(obj);

  if (prototypeOfObject.hasOwnProperty(key)) {
      return prototypeOfObject[key];
  }

  return undefined;
};

module.exports = propertyInObject;
