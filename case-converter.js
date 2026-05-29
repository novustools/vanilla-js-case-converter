/**
 * NovusTools - Vanilla JS Case Converter Logic
 * Dependency-free text transformation utility for programming and editorial string cases.
 */

const CaseConverter = {
    // Internal helper to extract words safely (handles camelCase splits and punctuation removal)
    _getWords: function(str) {
        return str
            .replace(/([a-z])([A-Z])/g, '$1 $2')   // Split existing camelCase/PascalCase
            .replace(/[-_]/g, ' ')                 // Replace dashes/underscores with space
            .replace(/[^\w\s\u00C0-\u017F]/g, '')  // Keep letters, numbers, spaces, and accented chars
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    },

    uppercase: (str) => str.toUpperCase(),
    
    lowercase: (str) => str.toLowerCase(),
    
    titlecase: (str) => {
        return str.toLowerCase().replace(/(?:^|\s|-|\/)\S/g, match => match.toUpperCase());
    },
    
    sentencecase: (str) => {
        return str.toLowerCase().replace(/(^\s*\w|[.?!]\s*\w)/g, match => match.toUpperCase());
    },
    
    camelcase: function(str) {
        const words = this._getWords(str);
        if (!words.length) return '';
        return words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    },
    
    pascalcase: function(str) {
        return this._getWords(str).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    },
    
    snakecase: function(str) {
        return this._getWords(str).map(w => w.toLowerCase()).join('_');
    },
    
    kebabcase: function(str) {
        return this._getWords(str).map(w => w.toLowerCase()).join('-');
    },
    
    alternatingcase: (str) => {
        let isLower = true;
        return str.split('').map(char => {
            if (/[a-zA-Z\u00C0-\u017F]/.test(char)) {
                const newChar = isLower ? char.toLowerCase() : char.toUpperCase();
                isLower = !isLower;
                return newChar;
            }
            return char; // Skip non-letters for alternation
        }).join('');
    }
};

// Example Usage:
// console.log(CaseConverter.camelcase("Hello World!")); // Output: helloWorld
// console.log(CaseConverter.snakecase("thisIsATest"));  // Output: this_is_a_test
// console.log(CaseConverter.kebabcase("Clean URL string")); // Output: clean-url-string
