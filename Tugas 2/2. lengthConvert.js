function convertLength(value) {
    if (value >= 100000) {
        // Convert centimeters to kilometers
        let kilometers = value / 100000;
        return `${kilometers} km`;
    } else {
        // Convert kilometers to centimeters
        let centimeters = value * 100000;
        return `${centimeters} cm`;
    }
}

// Example usage:
console.log(convertLength(100000)); // Output: "1 km"
console.log(convertLength(1));      // Output: "100000 cm"
console.log(convertLength(150000)); // Output: "1.5 km"
console.log(convertLength(0.5));    // Output: "50000 cm"