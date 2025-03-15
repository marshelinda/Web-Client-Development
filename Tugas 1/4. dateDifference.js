function getDateDifference(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const differenceInTime = endDate - startDate; // Difference in milliseconds
    const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
    
    return differenceInDays;
}

// Example usage:
const date1 = '2024-03-19';
const date2 = '2024-03-21';
const dateDifference = getDateDifference(date1, date2);
console.log(`Difference between dates: ${dateDifference}`); // Output: 2