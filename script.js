// console.log('running');
// // Part A 
// const myName = "Maurice Edmonds";
// let favoriteLanguage = "Python"
// let newFavoriteLanguage = "JavaScript"

// // Assigning the value of newFavoriteLanguage to favoriteLanguage
// favoriteLanguage = newFavoriteLanguage;


// // Logging a message using Literal String with variables
// console.log(`Hello, my name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);


// // Part B

// let firstVariable = "Hello World";

// // Change the value of firstVariable to some number
// firstVariable = 42;

// // Store the value of firstVariable in a new variable called secondVariable
// let firstvariable = secondVariable;
// // change the value of secondVariable to any string 
// let secondVariable = "Hello World";
// console.log("The value of firstVariable is:", firstVariable);

// // create a variable cakked yourname and set it equal to your name as a a string 
// let yourName = "Maurice Edmonds";

// // concatenate the string "Hello, my name is " and the vairable yourName 
// let greeting = "Hello, my name is " + yourName;

// // log the concatenated string
// console.log(greeting);

// // Part C

// const a = 4 
// const b = 53
// const c = 57
// const d = 16
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name'=== 'Name');

// console.log(true || false);
// console.log(false === false || true); 

// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c);

// console.log(a === a * d);
// console.log(48 =='48');


// // Part D
// let animal = "cow"; //  or any other value 
// if (animal === "cow") { 
//     console.log("moooooo");
// } else { 
//     console.log("Hey! You're not a cow.");
// }

// // Part E Define a variable to hold the person's age 

// const personAge = 18; // Change this value to test different ages

// // check if the persons age is 16 years or older with else statement 
// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else { 
//     console.log("Sorry, you're too young.");
// }

// I. Loops
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// Loop to print numbers from 0 to 10 inclusive
// console.log("\nNumbers from 10 to 400 inclusive");
// for (let i = 0; i <=400; i++) { 
//     console.log(i);
// }

// Loop to print numbers from 10 to 400 inclusive
// console.log("\nNumbers from 10 to 400 inclusive:");
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// Loop to print every third number starting from 12 up to 4000
// console.log("\nEvery third number starting from 12 up to 4000:");
// for (let i = 12; i <= 4000; i += 3) {
//     console.log(i);
// 


//? Part B Easy Does It 


// const quotes = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
// ];

// console.log(quotes);



// //? C. Accessing elements 

//  // Given the following array const randomThings = [1, 10, "Hello", true // How do you access the 1st element in the array?
//  const randomThings = [1, 10, "Hello", true];

//    // Access the 1st element in the array (index 0)
// const firstElement = randomThings[0];
//  console.log("The 1st element in the array:", firstElement);
                                                      
// // Change the value of "Hello" to "World"
// randomThings[2] = "World";
                                                      
// // Check the value of the array to make sure it updated
//  console.log("Updated array:", randomThings);
                                                      


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?

// Change the value of "Github" to "Octocat"

// Add a new element, "Cloud City" to the array



// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// // Access the 3rd element of the array (index 2)
// const thirdElement = ourClass[2];
// console.log("The 3rd element of the array:", thirdElement);

// // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";

// // Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");

// // Check the value of the array to make sure it updated
// console.log("Updated array:", ourClass);


// E. Mix It Up

// const myArray = [5, 10, 500, 20];

// // Add the string "Aegon" to the end of the array
// myArray.push("Aegon");

// // Add another string of your choice to the end of the array
// myArray.push("Stark");

// // Remove the 5 from the beginning of the array
// myArray.shift();

// // Add the string "Bob Marley" to the beginning of the array
// myArray.unshift("Bob Marley");

// // Remove the string of your choice from the end of the array 
// myArray.pop();

// // const reversedArray = myArray.reverse();

// // // Print the reversed array and the original array to check for mutation
// // console.log("Reversed array:", reversedArray);
// console.log("Original array:", myArray);