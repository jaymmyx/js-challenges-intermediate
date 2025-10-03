function findMissingNumber(arr) {
  if (!arr) {
    return undefined;
  } else if (arr.length === 0) {
    return 1;
  } else {
    // Sum from 1 upto n (inclusive)
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of arr) {
      actualSum += num;
    }

    return expectedSum - actualSum;
  }
}

module.exports = findMissingNumber;
