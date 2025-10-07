function permutations(str) {
  let result = [];

  if (str === "") {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfStr = str.slice(0, i) + str.slice(i + 1);

    const subPermutation = permutations(restOfStr);

    for (let j = 0; j < subPermutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }

  return result;
}

module.exports = permutations;
