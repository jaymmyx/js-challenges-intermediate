// function findMissingLetter(arr) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const alphabetArr = alphabet.split("");

//   const startLetterIdx = alphabetArr.indexOf(arr[0]);
//   const lastLetterIdx = alphabetArr.indexOf(arr[arr.length - 1]);

//   const expectedArr = alphabetArr.slice(startLetterIdx, lastLetterIdx);
//   for (let i = 0; i < expectedArr.length; i++) {
//     if (!arr.includes(expectedArr[i])) {
//       return expectedArr[i];
//     }
//   }
// }

function findMissingLetter(arr) {
  const charCodeStart = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== charCodeStart + i) {
      return String.fromCharCode(charCodeStart + i);
    }
  }
  return null; // If no letter is missing
}

module.exports = findMissingLetter;
