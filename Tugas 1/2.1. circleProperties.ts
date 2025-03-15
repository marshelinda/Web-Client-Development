"use strict";
function circleProperties(radius) {
    // Constants
    const pi = Math.PI;
    // Calculating diameter, circumference, and area
    const diameter = 2 * radius;
    const circumference = 2 * pi * radius;
    const area = pi * radius * radius;
    // Returning the results
    return {
        diameter,
        circumference,
        area
    };
}
// Example usage
const radius = 5;
const properties = circleProperties(radius);
console.log("Diameter:", properties.diameter);
console.log("Circumference:", properties.circumference.toFixed(4)); // Format to 4 decimal places
console.log("Area:", properties.area.toFixed(3)); // Format to 3 decimal places
