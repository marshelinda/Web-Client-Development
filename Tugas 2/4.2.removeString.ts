"use strict";

function removeFirstOccurrence(input: string, searchString: string): string {
    // Validate input types
    if (typeof input !== 'string' || typeof searchString !== 'string') {
        throw new Error("Both input and searchString must be strings.");
    }
    
    // Find the index of the first occurrence of the search string
    const index = input.indexOf(searchString);
    
    // If the substring is not found, return the original string
    if (index === -1) return input; 

    // Remove the first occurrence and return the new string
    return input.slice(0, index) + input.slice(index + searchString.length);
}

// Example usage:
const originalString = "Hello world";
const searchString = "ell";
console.log(removeFirstOccurrence(originalString, searchString)); // Output: Ho world