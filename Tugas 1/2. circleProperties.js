function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = Math.PI * diameter;
    const area = Math.PI * Math.pow(radius, 2);
    
    return {
        diameter: diameter,
        circumference: circumference,
        area: area
    };
}

// Example usage:
const radius = 5;
const circleProps = calculateCircleProperties(radius);
console.log(`Diameter: ${circleProps.diameter}`); // Output: 10
console.log(`Circumference: ${circleProps.circumference.toFixed(4)}`); // Output: 31.4159
console.log(`Area: ${circleProps.area.toFixed(3)}`); // Output: 78.539