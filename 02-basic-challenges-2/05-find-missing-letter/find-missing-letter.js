function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArr = alphabet.split("");

  const startLetterIdx = alphabetArr.indexOf(arr[0]);
  const lastLetterIdx = alphabetArr.indexOf(arr[arr.length - 1]);

  const expectedArr = alphabetArr.slice(startLetterIdx, lastLetterIdx);
  for (let i = 0; i < expectedArr.length; i++) {
    if (!arr.includes(expectedArr[i])) {
      return expectedArr[i];
    }
  }
}

module.exports = findMissingLetter;
