function emptyObjectWithoutPrototype() {
  const objectWitthoutPrototype = Object.create(null);
  return objectWitthoutPrototype;
};

module.exports = emptyObjectWithoutPrototype;
