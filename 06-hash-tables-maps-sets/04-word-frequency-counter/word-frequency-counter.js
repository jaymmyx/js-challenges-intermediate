function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/g);

  const wordFreqMap = new Map();

  for (const word of words) {
    if (word === "") continue;

    if (wordFreqMap.has(word)) {
      wordFreqMap.set(word, wordFreqMap.get(word) + 1);
    } else {
      wordFreqMap.set(word, 1);
    }
  }

  return wordFreqMap;
}

module.exports = wordFrequencyCounter;
