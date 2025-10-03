function removeDuplicates(arr) {
  let noDuplicatesArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < noDuplicatesArr.length; j++) {
      if (arr[i] === noDuplicatesArr[j]) {
        isUnique = false;
      }
    }

    if (isUnique) {
      noDuplicatesArr.push(arr[i]);
    }
  }

  return noDuplicatesArr;
}

module.exports = removeDuplicates;
