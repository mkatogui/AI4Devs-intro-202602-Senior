/**
 * String Reversal Logic
 * Developed for AI4Devs Challenge
 */

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('stringInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const outputDisplay = document.getElementById('output');

    /**
     * Core function to reverse the string.
     * Strategy: Split into array of characters, reverse array, join back to string.
     * This method correctly handles multiple words and special characters.
     */
    const reverseString = (str) => {
        // Handle empty or whitespace-only strings
        if (!str || str.trim().length === 0) {
            return str;
        }
        
        return str
            .split('')      // Converts "Hi" to ["H", "i"]
            .reverse()      // Reverses to ["i", "H"]
            .join('');      // Joins back to "iH"
    };

    const handleReversal = () => {
        const originalValue = inputField.value;
        const reversedValue = reverseString(originalValue);
        
        // Update the DOM
        outputDisplay.textContent = reversedValue;
    };

    // Trigger on button click
    reverseBtn.addEventListener('click', handleReversal);

    // Optional: Trigger reversal when user presses "Enter" key for better UX
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleReversal();
        }
    });
});