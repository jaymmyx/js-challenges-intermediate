function validateEmail(email) {
  // Enhanced regex for robust email validation
  // Prevents leading/trailing dots in local part and ensures proper domain structure
  const emailRegex =
    /^[A-Za-z0-9]([A-Za-z0-9._%+-]*[A-Za-z0-9])?@[A-Za-z0-9]([A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

module.exports = validateEmail;
