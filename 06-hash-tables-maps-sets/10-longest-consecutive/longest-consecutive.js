function longestConsecutiveSequence(nums) {
  const numsSet = new Set(nums);
  let longestSeq = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = 1;
      while (numsSet.has(currentNum + 1)) {
        currentSeq++;
        currentNum++;
      }
      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }

  return longestSeq;
}

module.exports = longestConsecutiveSequence;
