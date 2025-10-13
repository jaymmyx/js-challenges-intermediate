const HashTable = require("./HashTable");

function anagramGrouping(words) {
  const anagramGroup = new HashTable();
  const uniqueSortedWords = [];
  const anagramArr = [];
  for (const word of words) {
    const sortedWord = word.toLowerCase().split("").sort().join("");

    if (anagramGroup.has(sortedWord)) {
      anagramGroup.set(
        sortedWord,
        anagramGroup.get(sortedWord).concat(...[word])
      );
    } else {
      anagramGroup.set(sortedWord, [word]);
      uniqueSortedWords.push(sortedWord);
    }
  }

  for (const uniqueSortedWord of uniqueSortedWords) {
    anagramArr.push(anagramGroup.get(uniqueSortedWord));
  }

  return anagramArr;
}

module.exports = anagramGrouping;
