"use strict";
function getInitials(fullName) {
    // Split the full name into an array of names
    const nameParts = fullName.trim().split(' ');
    // Extract the initials from each part
    const initials = nameParts.map(name => name.charAt(0).toUpperCase()).join('');
    return initials;
}
// Example usage:
const fullName = "Marshelinda Rukmana";
const initials = getInitials(fullName);
console.log(initials); // Output: MR
