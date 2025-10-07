function flattenArray(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      // Use spread operator for efficient concatenation
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = flattenArray;
