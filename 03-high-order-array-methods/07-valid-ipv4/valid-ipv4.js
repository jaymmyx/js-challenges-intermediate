const isValidIPv4 = (str) => {
  const octets = str.split(".");

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const octetInt = parseInt(octet);

    return octetInt >= 0 && octetInt <= 255 && octet === octetInt.toString();
  });
};

module.exports = isValidIPv4;
