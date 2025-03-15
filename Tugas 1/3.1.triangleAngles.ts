"use strict";
// Function to calculate the third angle of a triangle
function findThirdAngle(angleA, angleB) {
    // Sum of angles in a triangle is always 180 degrees
    const totalSum = 180;
    return totalSum - (angleA + angleB);
}
// Example input angles
const angleA = 80; // First angle
const angleB = 65; // Second angle
// Calculate the third angle
const angleC = findThirdAngle(angleA, angleB);
// Output the result
console.log(`Given angles are ${angleA}° and ${angleB}°. The third angle is ${angleC}°.`);
