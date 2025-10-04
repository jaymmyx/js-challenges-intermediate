function formatPhoneNumber(arr) {
  const areaCode = arr.slice(0, 3).join("");
  const centralOfficeCode = arr.slice(3, 6).join("");
  const lineNumber = arr.slice(6).join("");
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

module.exports = formatPhoneNumber;
