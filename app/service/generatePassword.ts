export default function generatePassword(length: number, select: number[]): string {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+";

  // Create an empty string to store the generated password
  let password = "";
  
  // Build the pool of characters to choose from based on the selection array
  let charPool = "";

  if (select[0]) {  // upperCase
    charPool += upperCase;
  }
  if (select[1]) {  // lowerCase
    charPool += lowerCase;
  }
  if (select[2]) {  // numbers
    charPool += numbers;
  }
  if (select[3]) {  // symbols
    charPool += symbols;
  }

  // If no character types are selected, default to using all characters
  if (charPool === "") {
    charPool = upperCase + lowerCase + numbers + symbols;
  }

  // Generate the password by picking random characters from the pool
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}
