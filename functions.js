// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?
// function printGreeting(Maurice) {
//     return 'Hello, ${Maurice}!';

// }



// // Example usage:
// console.log(printGreeting("Matt")); // Output: Hello, John!



// // B Print cool 

// function printCool(Tom) {
//     console.log(`${Tom} is cool.`);
// }

// // Example usage:
// printCool("Tom"); // Output: TOm is cool.


// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
// function calculateCube(number) {
//     const volume = (number, 3);
//     console.log(volume);
// }

// // Example usage:
// calculateCube(5); // Output: 125


// D isVowel 
// rite a function isVowelthat takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise.
//  The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
//  In general, when you write functions, 
// take a minute to test them with different values to make sure they behave the way you want.

function isVowel(character) {
const vowels = ['a', 'e', 'i', 'o' ,'u'];
return vowels.includes(character.toLowerCase());


}

console.log(isVowel("a"));
console.log(isVowel("E"));
console.log(isVowel("z"));
console.log(isVowel("i"));



// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). 
// The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length];
}

// Example usage:
console.log(getTwoLengths("Hank", "Hippopopalous")); // Output: [4, 13]

//F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
// The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

function getMultipleLengths(arr) {
    return arr.map(str => str.length);
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

function maxOfThree(num1, num2, num3) {
    if(num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

function printLongestWord(words) {
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length || (word.length === longestWord.length && words.indexOf(word) < words.indexOf(longestWord))) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); // Output: "Peanutbutter"
