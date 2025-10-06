function validatePassword(password) {
  // Early exit for length check
  if (password.length < 8) {
    return false;
  }

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  // Single pass through string
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "a" && char <= "z") {
      hasLower = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    }

    // Early exit when all conditions met
    if (hasUpper && hasLower && hasDigit) {
      return true;
    }
  }

  return hasUpper && hasLower && hasDigit;
}

module.exports = validatePassword;
