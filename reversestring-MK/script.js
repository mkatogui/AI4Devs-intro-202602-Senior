/**
 * String Reversal Logic & UI Management
 */

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('stringInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const outputDiv = document.getElementById('output');
    const copyFeedback = document.getElementById('copyFeedback');

    /**
     * Reverses a string using ES6 methods.
     * handles multiple words and special characters.
     */
    const reverseString = (str) => {
        // We convert the string to an array, reverse the order, and join it back.
        // Using the spread operator [...] or split('') ensures characters are separated.
        return [...str].reverse().join('');
    };

    const handleReversal = () => {
        const text = inputField.value;
        
        // Even if the string is empty, we handle the reversal (which returns an empty string)
        const reversed = reverseString(text);
        
        outputDiv.textContent = reversed;

        // Only show copy button if there is text to copy
        copyBtn.style.display = reversed.length > 0 ? 'block' : 'none';
    };

    const handleCopy = async () => {
        const textToCopy = outputDiv.textContent;
        if (!textToCopy) return;

        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Visual feedback
            copyFeedback.style.opacity = '1';
            setTimeout(() => {
                copyFeedback.style.opacity = '0';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // Event Listeners
    reverseBtn.addEventListener('click', handleReversal);

    copyBtn.addEventListener('click', handleCopy);

    // UX: Allow "Enter" key to trigger reversal
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleReversal();
    });
});