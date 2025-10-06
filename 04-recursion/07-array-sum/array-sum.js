function arraySum(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 0) {
    return 0;
  }

  return nums[nums.length - 1] + arraySum(nums.slice(0, nums.length - 1));
}

module.exports = arraySum;
