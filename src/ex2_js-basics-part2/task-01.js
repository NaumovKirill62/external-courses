function detective(value) {
  const type = typeof value;

  if (isNaN(value)) {
    return undefined
  }

  if ( type === 'number' ) {
    return 'number'
  }

  if ( type === 'string') {
    return 'string';
  }

  return undefined
};

module.exports = detective;
