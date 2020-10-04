function addPropertyInObject(property,obj) {
  if (!(obj.hasOwnProperty(property))) {  
    // eslint-disable-next-line
    obj[property] = 'new';
  }

  return obj;
};

module.exports = addPropertyInObject;
