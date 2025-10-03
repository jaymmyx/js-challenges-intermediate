function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    if (isVowel(formattedStr[i])) {
      count++;
    }
  }

  return count;
}

function isVowel(char) {
  let vowelBool = true;
  switch (char) {
    case "a":
      break;
    case "e":
      break;
    case "i":
      break;
    case "o":
      break;
    case "u":
      break;
    default:
      vowelBool = false;
  }
  return vowelBool;
}

module.exports = countVowels;
