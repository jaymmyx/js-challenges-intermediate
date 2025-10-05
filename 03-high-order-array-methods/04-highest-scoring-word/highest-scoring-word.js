function highestScoringWord(words) {
  const wordsArr = words.split(" ");

  const wordScores = wordsArr.map((word) => {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += word[i].charCodeAt(0) - 96;
    }

    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < wordScores.length; i++) {
    if (wordScores[i] > highestScore) {
      highestScore = wordScores[i];
      highestIndex = i;
    }
  }

  return wordsArr[highestIndex];
}

module.exports = highestScoringWord;
