function addPropertyInObject(property,obj) {
  const objectDefault = {
  [property] : 'new',
  };

  if (!(obj.hasOwnProperty(property))) {  
    Object.assign(obj, objectDefault);
  }

  return obj;
};

module.exports = addPropertyInObject;
