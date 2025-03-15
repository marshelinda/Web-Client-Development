"use strict";
function isPalindrome(input) {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric chars and convert to lowercase
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
}
// Example usage:
const palindromeCheck = 'madam';
console.log(`${palindromeCheck} → ${isPalindrome(palindromeCheck) ? 'palindrome' : 'not palindrome'}`); // Output: madam → palindrome
