// Get DOM elements
const textInput = document.getElementById('textInput');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

// Debug: Log if elements are found
console.log('Input element:', textInput);
console.log('Button element:', checkButton);
console.log('Result element:', result);

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Add click event listener to the check button
checkButton.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    console.log('Input text:', inputText);
    
    if (inputText === '') {
        result.textContent = 'Please enter some text';
        result.style.color = 'red';
        return;
    }

    const isPal = isPalindrome(inputText);
    console.log('Is palindrome:', isPal);

    if (isPal) {
        result.textContent = `"${inputText}" is a palindrome!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputText}" is not a palindrome`;
        result.style.color = 'red';
    }
});

// Add event listener for Enter key
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
        checkButton.click();
    }
});

// Debug: Log when script is loaded
console.log('Script loaded successfully');
