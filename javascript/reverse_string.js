function reverseString(str) {
  let reversed = '';

  // loop through the string in reverse order
  for(let i = str.length - 1; i >= 0; i--) {
    // append each char to the reversed string
    reversed += str[i]
  }

  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Define a function reverseString that takes a single argument str.
// Initialize an empty string reversed to store the reversed characters.
// Loop through the characters of str starting from the last character to the first:
// Append each character to reversed.
// Return the reversed string.