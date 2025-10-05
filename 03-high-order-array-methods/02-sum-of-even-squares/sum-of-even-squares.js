function sumOfEvenSquares(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
}

module.exports = sumOfEvenSquares;
