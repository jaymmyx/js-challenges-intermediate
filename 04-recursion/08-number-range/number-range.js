function numberRange(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  return numberRange(startNum, endNum - 1).concat([endNum]);
}

module.exports = numberRange;
