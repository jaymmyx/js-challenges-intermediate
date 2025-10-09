function anagramGrouping(words) {
  const anagramGroupMap = new Map();

  for (const word of words) {
    const sortedWord = word.split("").sort().join();
    if (anagramGroupMap.has(sortedWord)) {
      anagramGroupMap.set(
        sortedWord,
        anagramGroupMap.get(sortedWord).concat(word)
      );
    } else {
      anagramGroupMap.set(sortedWord, [word]);
    }
  }

  return Array.from(anagramGroupMap.values())
}

module.exports = anagramGrouping;
