function isPalindrome(str) {
  formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  return reverseString(formattedStr) === formattedStr;
}

function isAlphaNumeric(char) {
  let unicode = char.charCodeAt(0);
  return (unicode >= 48 && unicode <= 57) || (unicode >= 97 && unicode <= 122);
}

function removeNonAlphaNumeric(str) {
  formattedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      formattedStr += str[i];
    }
  }

  return formattedStr;
}

function reverseString(str) {
  reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

module.exports = isPalindrome;
