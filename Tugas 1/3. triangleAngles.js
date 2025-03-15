function calculateTriangleThirdAngle(angle1, angle2) {
    return 180 - (angle1 + angle2);
}

// Example usage:
const a = 80;
const b = 65;
const angleC = calculateTriangleThirdAngle(a, b);
console.log(`Third angle of the triangle: ${angleC}`); // Output: 35