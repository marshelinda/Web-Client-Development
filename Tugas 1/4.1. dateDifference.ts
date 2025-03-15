"use strict";
// Function to calculate the difference in days between two dates
function calculateDateDifference(date1, date2) {
    // Parse the date strings into Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    // Calculate the time difference in milliseconds
    const timeDifference = endDate.getTime() - startDate.getTime();
    // Convert the time difference from milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    return Math.round(timeDifference / millisecondsInADay);
}
// Example input dates
const date1 = '2024-03-19'; // First date
const date2 = '2024-03-21'; // Second date
// Calculate the difference in days
const dayDifference = calculateDateDifference(date1, date2);
// Output the result
console.log(`The difference between ${date1} and ${date2} is ${dayDifference} days.`);
