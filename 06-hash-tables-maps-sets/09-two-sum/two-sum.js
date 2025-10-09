function twoSum(arr, target) {
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(arr[i], i);
  }

  return [];
}

module.exports = twoSum;
