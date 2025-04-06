function isPalindrome(str: string): boolean {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr: string = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string with its reverse
    const reversedStr: string = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

// Example usage
const inputString: string = "madam";
const result: boolean = isPalindrome(inputString);

if (result) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}