"use strict";
function convertLength(value, fromUnit) {
    if (fromUnit === 'cm') {
        const kilometers = value / 100000;
        return `${kilometers} km`;
    }
    else if (fromUnit === 'km') {
        const centimeters = value * 100000;
        return `${centimeters} cm`;
    }
    throw new Error("Invalid unit. Use 'cm' or 'km'");
}
// Example usage:
console.log(convertLength(100000, 'cm')); // Output: 1 km
console.log(convertLength(1, 'km')); // Output: 100000 cm
