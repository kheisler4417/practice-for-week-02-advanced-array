/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/


// let removeLastVowel = function(word) {
//     // Your code here
// };

let hipsterfy = function (sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const words = sentence.split(' ');

    const hipsterWords = words.map(word => {
        let lastVowelIndex = -1;
        for (let i = word.length - 1; i >= 0; i--) {
            if (vowels.includes(word[i])) {
                lastVowelIndex = i;
                break;
            }
        }
        return word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);
    });

    return hipsterWords.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
