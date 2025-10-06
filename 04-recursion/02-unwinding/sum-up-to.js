function sumUpTo(num) {
  if (num <= 1) {
    return num;
  }

  return num + sumUpTo(num - 1);
}

module.exports = sumUpTo;
