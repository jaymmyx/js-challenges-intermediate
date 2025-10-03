function areAllCharactersUnique(str) {
  const strSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (strSet.has(char)) {
      return false;
    }

    strSet.add(char);
  }

  return true;
}

module.exports = areAllCharactersUnique;
