function cutString(str,num) {
  if (str.length > num) {
      return str.substring(0, num-1) + "\u2026";
  }

  return str;
}

module.exports = cutString;
