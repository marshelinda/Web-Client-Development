"use strict";
function removeFirstOccurrence(input, searchString) {
    const index = input.indexOf(searchString);
    if (index === -1)
        return input; // No occurrence found
    return input.slice(0, index) + input.slice(index + searchString.length);
}
// Example usage:
const originalString = "Hello world";
const searchString = "ell";
console.log(removeFirstOccurrence(originalString, searchString)); // Output: Ho world
