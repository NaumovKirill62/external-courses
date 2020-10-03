function addPropertyInObject(property,obj) {
  if (!(property in obj)) {
// eslint-disable-line    obj[property] = 'new';
  }

return obj;
};

module.exports = addPropertyInObject;
