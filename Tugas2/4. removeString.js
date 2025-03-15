function removeFirstOccurrence(inputString, searchString) {
    // Find the index of the first occurrence of the search string
    const index = inputString.indexOf(searchString);
    
    // If the search string is found, construct a new string without it
    if (index !== -1) {
        // Create a new string by slicing around the first occurrence
        return inputString.slice(0, index) + inputString.slice(index + searchString.length);
    }
    
    // If the search string is not found, return the original string
    return inputString;
}

// Example usage
const string = "Hello world";
const searchString = "ell";
const result = removeFirstOccurrence(string, searchString);

console.log(`Original String: "${string}"`);
console.log(`Search String: "${searchString}"`);
console.log(`Modified String: "${result}"`); // Expected Output: "Ho world"