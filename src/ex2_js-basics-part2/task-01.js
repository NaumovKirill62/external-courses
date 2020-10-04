function detective(value) {
  const type = typeof value;

  if (isNaN(value)) {
    return undefined
  }

  if (type === 'number' || type === 'string') {
    return type;
  }

  return undefined
};

module.exports = detective;
