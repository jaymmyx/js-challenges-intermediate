function findMissingLetter(chars) {
  // ['a', 'b', 'c', 'd', 'f'] => 'e'

  const charCodes = chars.map((char) => char.charCodeAt(0));
  let start = charCodes[0];

  const missingCode = charCodes.find((charCode) => {
    if (charCode - start > 1) {
      return true;
    }
    start = charCode;
    return false;
  });

  return missingCode ? String.fromCharCode(missingCode - 1) : false;
}

module.exports = findMissingLetter;
