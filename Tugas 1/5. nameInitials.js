function printInitials(name) {
    const initials = name.split(' ')
                         .map(part => part.charAt(0).toUpperCase())
                         .join('');
    return initials;
}

// Example usage:
const fullName = 'Marshelinda Rukmana';
const initials = printInitials(fullName);
console.log(`Initials: ${initials}`); // Output: MR