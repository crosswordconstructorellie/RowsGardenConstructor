
function findWordsFromPattern(input, wordlist) {
    // Function to check if a word matches the pattern, considering wildcards and circular wraparound
    const matchPattern = (word, pattern) => {
        // Check if the word is of 6 letters length
        if (word.length !== 6) return false;
        
        for (let i = 0; i < 6; i++) {
            let match = true;
            for (let j = 0; j < 6; j++) {
                let currentPattern = pattern[(i + j) % 6]; // Circular wraparound
                if (currentPattern !== '?' && currentPattern !== word[j]) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
        }
        return false;
    };

    // Collect all matching words from the wordlist
    const matchingWords = wordlist.filter(word => matchPattern(word, input));

    // Output the result
    if (matchingWords.length > 0) {
        console.log("Matching words found: " + matchingWords.join(", "));
    } else {
        console.log("No words found");
    }
}

/* Example usage
const wordlist = [
    "abcfed", "abcdef", "bcdefa", "acbfed", "afedcb", "cbaefd", "cbdafe", "fedcba"
];

const pattern = "abc?e?";
findWordsFromPattern(pattern, wordlist);
*/
