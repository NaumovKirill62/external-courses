function clonObject(obj) {
let clon = {};

  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      clon[key] = obj[key];
    } else {
	    if (Array.isArray(obj[key])) {
        clon[key] = [];
		    for (let i = 0; i < obj[key].length; i++) {
			    clon[key].push(clonObject(obj[key][i]));
        }
      } else {
        clon[key] = clonObject(obj[key]);
      }
    }
  }

  return clon;
};

module.exports = clonObject;
