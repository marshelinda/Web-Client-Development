"use strict";
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Example usage:
const tempF = 68; // Input: Temperature in Fahrenheit
const tempC = fahrenheitToCelsius(tempF);
console.log(`${tempF}°F is ${tempC.toFixed(2)}°C`); // Output
