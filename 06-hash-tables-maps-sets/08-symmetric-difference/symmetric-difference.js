function symmetricDifference(arr1, arr2) {
  const symmetricSet = new Set(arr1);
  const set2 = new Set(arr2);

  for (const num of set2) {
    if (symmetricSet.has(num)) {
      symmetricSet.delete(num);
    } else {
      symmetricSet.add(num);
    }
  }
  return [...symmetricSet];
}

module.exports = symmetricDifference;
