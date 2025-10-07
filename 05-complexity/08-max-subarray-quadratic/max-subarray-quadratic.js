function maxSubarraySum(arr, k) {
  if (k > arr.length) return null;
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[i + j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

module.exports = maxSubarraySum;
