function findFirstNonRepeatingCharacter(str) {
  // Have to finish loop so O(n) because what if first character is repeated at last index?

  checkerObj = {};

  for (const char of str) {
    checkerObj[char] = (checkerObj[char] || 0) + 1;
  }

  for (const char of str) {
    if (checkerObj[char] === 1) {
      return char;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
