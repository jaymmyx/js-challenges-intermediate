function generateHashtag(str) {
  if (str.trim().length === 0 || str.trim().length > 140) {
    return false;
  }

  const hashTag = str
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((word) => {
      word = word[0].toUpperCase() + word.slice(1);
      return word;
    })
    .join("");

  return `#${hashTag}`;
}

module.exports = generateHashtag;
