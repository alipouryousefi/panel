const isNationalIdValid = (nationalId = "") => {
  // Check length is 10
  if (nationalId.length !== 10) {
    return false;
  }

  // Check if all of the numbers are the same
  if (new Set(nationalId).size === 1) {
    return false;
  }

  // Add leading zeros if nationalId.length < 10
  if (nationalId.length < 10) {
    nationalId = "0".repeat(10 - nationalId.length) + nationalId;
  }

  // Sum all numbers
  let sumOfNumbers = 0;
  for (let i = 0; i < 9; i++) {
    sumOfNumbers += Number(nationalId.charAt(i)) * (10 - i);
  }

  // Perform MOD on 11
  let modulus = sumOfNumbers % 11;

  // Check with control value
  let controlValue = Number(nationalId.charAt(9));
  if (modulus >= 2) {
    return controlValue === 11 - modulus;
  } else {
    return controlValue === modulus;
  }
};

export { isNationalIdValid };
