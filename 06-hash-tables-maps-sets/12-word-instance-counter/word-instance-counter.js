const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  const strArr = str.toLowerCase().split(/\W+/g);
  const wordFreqHash = new HashTable();

  for (const word of strArr) {
    wordFreqHash.set(word, (wordFreqHash.get(word) || 0) + 1);
  }

  return wordFreqHash.get(word);
}

module.exports = wordInstanceCounter;
