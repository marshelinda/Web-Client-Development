function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius using the formula
    return (fahrenheit - 32) * (5 / 9);
}

// Example input in Fahrenheit
const inputFahrenheit = 32; // You can change this value to test with other inputs
const celsius = fahrenheitToCelsius(inputFahrenheit);

// Output the result
console.log(`Input: ${inputFahrenheit}°F. Expected Output: ${celsius.toFixed(1)}°C`); // Fixed to 1 decimal place