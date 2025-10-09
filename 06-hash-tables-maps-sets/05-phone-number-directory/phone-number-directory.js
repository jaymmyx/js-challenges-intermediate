function phoneNumberDirectory(arr) {
  const phoneNumDirectoryMap = new Map();

  for (const item of arr) {
    const [name, phone] = item.split(":");

    phoneNumDirectoryMap.set(name, phone);
  }

  return phoneNumDirectoryMap;
}

module.exports = phoneNumberDirectory;
