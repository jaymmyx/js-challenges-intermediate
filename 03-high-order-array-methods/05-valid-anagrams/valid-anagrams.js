function validAnagrams(word1, word2) {
  // Early exit for different lengths - anagrams must have same length
  if (word1.length !== word2.length) {
    return false;
  }

  const charCount = {};

  // Single pass: increment for word1, decrement for word2
  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];

    charCount[char1] = (charCount[char1] || 0) + 1;
    charCount[char2] = (charCount[char2] || 0) - 1;
  }

  // If strings are anagrams, all character counts should be zero
  return Object.values(charCount).every((count) => count === 0);
}

module.exports = validAnagrams;
