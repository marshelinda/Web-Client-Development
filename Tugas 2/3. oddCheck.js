function isEven(n) {
    // Check if n is an integer
    if (!Number.isInteger(n)) {
        throw new Error("Input must be an integer.");
    }
    return n % 2 === 0; // Returns true if even, false if odd
}

// Example usage:
console.log(`1000 isEven: ${isEven(1000)}`); // Output: 1000 isEven: true
console.log(`1001 isEven: ${isEven(1001)}`); // Output: 1001 isEven: false