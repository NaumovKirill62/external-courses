function delSpace(rawStr) {
  if (rawStr[0] === ' ' || rawStr[rawStr.length] === ' ') {
    return rawStr.slice(1, -1);
  }

return rawStr;
}

module.exports = delSpace;
