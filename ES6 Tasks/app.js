// ES6 TASKS:



// Global Scope:


// var name1 = "ali";
// let name2 = "huzaifa";
// const name3 = "zubair";

// function abc() {
//     console.log(name1);
//     console.log(name2);
//     console.log(name3);
// }

// abc();

// all of them worked.



// Function Scope:


// function xyz() {
//     var value1 = "asif";
//     let value2 = "qasim";
//     const value3 = "daud";
// }

// console.log(value1);
// console.log(value2);
// console.log(value3);

// xyz();

// none of them 



// Block Scope:


// let a = 5;
// let b = 5;

// if ( a === b ) {
//     var var1 = "asif";
//     let var2 = "hanif";
//     const var3 = "anees";
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);

// only var worked.



// Hoisting with var:


// console.log(variable01);

// var variable01 = 10;

// i got undefined.



// Hoisting with let and const:


// console.log(variable02);

// console.log(variable03);

// let variable02 = 15;

// const variable03 = 25;

// cannot access before initialization.



// Re-declaration:


// var varVariable = 5;
// var varVariable = 10;

// console.log(varVariable);

// The second one shows in console.


// let letVariable = 5;
// let letVariable = 10;

// console.log(letVariable);

// Error saying variable alredy defined.


// const constVariable = 5;
// const constVariable = 10;

// console.log(constVariable);

// Same error as let.



// Re-assignment:


// var varVar = 10;
// varVar = 15;

// console.log(varVar);

// New value assigned.


// let letVar = 10;
// letVar = 15;

// console.log(letVar);

// New value assigned.


// const constVar = 10;
// constVar = 15;

// console.log(constVar);

// Typeerror showing.



// Temporal Dead Zone (TDZ):


// {
//     console.log(variable);
//     // ReferenceError: Cannot access 'myLet' before initialization.
//     let variable = 10;
//     console.log(variable);
//     // giving console.
// }


// {
//     console.log(variable0);
//     // ReferenceError: Cannot access 'myLet' before initialization.
//     const variable0 = 10;
//     console.log(variable0);
//     // giving console.
// }



// When to use 'var':


// function varVariavle () {
//     if (true) {
//         var message = "Hello! JWP";
//     }
//     console.log(message);
// };

// varVariavle();



// When to use 'let':


// for ( let i = 0 ; i < 5 ; i++ ) {
//     console.log(i);
// };



// When to use 'const':


// const fixValue = 3.13263;

// console.log(fixValue);



// String Interpolation:


// let firstName = "Adil";
// let lastName = "Khosa";

// console.log(`${firstName} ${lastName}`);



// Multi-line Strings:


// const address = `                
// 123 Main Street
// Block 4
// Gulistan e johar
// Karachi
// Pakistan
// `;

// console.log(address);



// Simple Expressions:


// const num1 = 2;
// const num2 = 3;
// const result = `The sum of ${num1} and ${num2} is ${num1+num2}.`

// console.log(result);



// Function Calls:


// function multiply () {
//     const num1 = 5;
//     const num2 = 10;
//     const result = `The product of ${num1} and ${num2} is ${num1*num2}.`;
//     console.log(result);
// };

// multiply();



// Creating a Tagged Template:



// Formatting:



// Conditional Logic:



// Loops within Template Literals:


// const shoppingList = ["watch","glasses","shoes","socks","jeans","t-shirt","jacket"];

// const htmlList = `
//   <ul>
//     <li>${shoppingList[0]}</li>
//     <li>${shoppingList[1]}</li>
//     <li>${shoppingList[2]}</li>
//     <li>${shoppingList[3]}</li>
//     <li>${shoppingList[4]}</li>
//     <li>${shoppingList[5]}</li>
//     <li>${shoppingList[6]}</li>
//   </ul>
// `;

// console.log(htmlList);



// Escaping Backticks:



// Nested Template Literals:



// Simple Condition:


// const age = 17;

// let canVote = age >= 18 ? "No" : "No";

// console.log(canVote);



// Even or Odd:


// const number = 20;

// let evenOrOdd = ( number % 2 === 0 ) ? "Even" : "Odd";

// console.log(evenOrOdd);



// Grade Evaluation:


// const score = +prompt("Enter your score..");

// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" :
//             score >= 60 ? "D" : "F";

// console.log(grade);



// Login Status:



// Discount Eligibility:



// Determine Max Value:


// function maxValue( a, b ) {
//     return (a > b) ? a : b;
// };
  
// let result = maxValue(10, 20);
// console.log(result);



// Greeting Message:


// let name = prompt("Enter your name");
// let greet;

// if ( name ) {
//     greet = `Hello ${name}!`;
// }
// else {
//     greet = `Hello guest!`;
// }

// console.log(greet);



// Mapping Values:


// let arrOfNums = [ 1, 2, 3, 4, 5, 6 ];

// let mappingNums = arrOfNums.map( num => (num % 2 === 0) ? num * 2 : num * 3);

// console.log(mappingNums);



// Filtering Values:


// let arrOfStrings = ["elephant", "cat", "apple", "banana", "dog", "hi"];

// let filteredArr = arrOfStrings.filter( str => str.length > 3 ? true : false );

// console.log(filteredArr);



// Copying an Array:


// let originalArr = ["abc", 12, true];

// let copiedArr = [...originalArr];

// console.log(copiedArr);



// Merging Arrays:


// let arr1 = ['abc', 12, true];

// let arr2 = ['xyz', 15, false];

// let mergedArr = [...arr1,...arr2];

// console.log(mergedArr);



// Adding Elements to an Array:


// let numbers = [12, 23, 34, 45, 56];

// numbers = [0, ...numbers, 100];

// console.log(numbers);



// Copying an Object:


// let originalObj = {
//     name: "Adil",
//     age: 17,
//     city: "Karachi",
// };

// let copiedObj = { ...originalObj };

// console.log("Original Object:", originalObj);
// console.log("Copied Object:", copiedObj);

// console.log("Are they the same reference?", originalObj === copiedObj);



// Merging Objects:


// let obj1 = {
//     name: "Adil",
//     age: 17,
//     city: "Karachi",
// };

// let obj2 = {
//     class: "Module-B",
//     subject: "WMD",
//     institute: "JWP",
// };

// let mergedObj = {...obj1, ...obj2};

// console.log(mergedObj);



// Updating Object Properties:


// let user = {
//     name: "Adil",
//     age: 17,
//     email: "adil123@gmail.com",
// };

// let updatedUser = {
//     ...user,
//     email: "adil0909@gmail.edu.pk",
//     address: "Block#4 Gulistan-e-johar Block#4 Karachi.",
// };

// console.log("Updated User:", updatedUser);



// Passing Array Elements as Arguments:


// function sum ( a, b, c ) {
//     return a + b + c;
// };
  
// let numbers = [5, 10, 15];
// let result = sum(...numbers);
  
// console.log("Sum of the numbers:", result);



// Combining Multiple Arrays:


// function combinedArrs (...arrays) {
//     return [].concat(...arrays);
// };
  
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
  
// let combinedArray = combinedArrs(arr1, arr2, arr3);
  
// console.log("Combined Array:", combinedArray);



// Rest Parameter with Spread Operator:


// function multiply ( number, ...args ) {
//     return args.map( arg => number * arg );
// };
  
// let result = multiply(2, 3, 4, 5);
  
// console.log("Multiplication Results:", result);



// Spread Operator with Nested Structures:


// let nestedArr = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ];

// let copiedArr = [...nestedArr];

// copiedArr[0][0] = 99;

// console.log("Original Nested Array:", nestedArr);
// console.log("Copied Nested Array:", copiedArr);



// Sum Function:


// function sum (...args) {
//     return args.reduce(( total, current ) => total + current, 0);
// };
  
// console.log(sum( 1, 2, 3 ));
// console.log(sum(5, 10, 15, 20));
// console.log(sum(7, 8));



// Average Function:


// function average (...args) {
 
//     if ( args.length === 0 ) return 0;
    
//     const sum = args.reduce(( total, current ) => total + current, 0);
    
//     return sum / args.length;

// };
  
// console.log(average(1, 2, 3));
// console.log(average(5, 10, 15, 20));
// console.log(average(7, 8));



// First and Rest:


// const nums = [ 10, 20, 30, 40, 50 ];

// const [ first, ...rest ] = nums;

// console.log("First:", first);
// console.log("Rest:", rest);



// Skip and Rest:


// const colors = [ "Red", "Blue", "Green", "Yellow", "Purple" ];

// const [ , , ...remainingColors ] = colors;

// console.log( "Remaining Colors:" , remainingColors );



// Basic Destructuring:


// const person = {
//     name: "Adil",
//     age: 17,
//     email: "adil123@gmail.com",
//     address: "Block#4 Gulistan-e-johar Block#4 Karachi",
// };
  
// const { name, email, ...rest } = person;
  
// console.log("Name:", name);
// console.log("Email:", email);
// console.log("Rest:", rest);



// Nested Destructuring:


// const std = {
//     id: 123,
//     name: "Adil",
//     grades: [90, 85, 92],
//     info: {
//       age: 17,
//       major: 'Pre-Enjineering'
//     },
// };
  
// const { id, name, info: { major }, ...rest } = std;
  
// console.log( "ID:" , id );
// console.log( "Name:" , name );
// console.log( "Major:" , major );
// console.log( "Rest:" , rest );



// Filter Even Numbers:


// function filterEvenNums ( ...numbers ) {
//     return numbers.filter( number => number % 2 === 0 );
// };
  
// console.log(filterEvenNums(1, 2, 3, 4, 5, 6));
// console.log(filterEvenNums(10, 15, 20, 25));
// console.log(filterEvenNums(7, 13, 22, 8));



// Combine and Sort Arrays:


// function combineAndSort ( ...arrays ) {
//     const combinedArray = [].concat(...arrays);
    
//     return combinedArray.sort((a, b) => a - b);
// };

// const array1 = [ 5, 3, 8 ];
// const array2 = [ 2, 9, 1 ];
// const array3 = [ 7, 6, 4 ];

// const result = combineAndSort(array1, array2, array3);
// console.log(result);



// Basic Destructuring:


// const fruits = ["apple","banana","cherry"];

// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);



// Skipping Elements:


// const colors = ["red","green","blue","yellow"];

// const [primaryColor, , territaryColor] = colors;

// console.log(primaryColor);
// console.log(territaryColor);



// Rest Operator:


// const nums = [1, 2, 3, 4, 5];

// const [firstNum, ...remainingNums] = nums;

// console.log(firstNum);
// console.log(remainingNums);



// Basic Destructuring:


// const person = {
//     name: "Adil",
//     age: 17,
//     city: "Karachi",
// };

// const {name, age, city} = person;

// console.log(name);
// console.log(age);
// console.log(city);



// Renaming Variables:


// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// const { make: carMake, model: carModel, year: carYear } = car;

// console.log(carMake);
// console.log(carModel);
// console.log(carYear);



// Default Values:


// const setting = {
//     theme: "light",
//     language: "Spanish",
// };

// const { theme, language = "English" } = setting;

// console.log(theme);
// console.log(language);



// Array of Arrays:


// const nestedArr = [[1, 2], [3, 4], [5, 6]];

// const [[a], [b], [c]] = nestedArr;

// console.log(a);
// console.log(b);
// console.log(c);



// Object within an Object:


// const profile = {
//     username: "Adil",
//     details: {
//       email: "adil123@example.com",
//       address: "123 Main St, Karachi."
//     },
// };

// const { username, details: { email, address } } = profile;

// console.log(username);
// console.log(email);
// console.log(address);



// Mix of Arrays and Objects:


// const data = {
//     id: 1,
//     info: [
//       { name: "Alice" },
//       { age: 25 }
//     ],
// };

// const { id, info: [{ name }, { age }] } = data;

// console.log(id);
// console.log(name);
// console.log(age);



// Array Parameters:


// function printCoordinates([ x, y ]) {
//     console.log(`x: ${x}, y: ${y}`);
// };
  
// printCoordinates([10, 20]);
// printCoordinates([30, 40]);
// printCoordinates([50, 60]);



// Object Parameters:


// function displayUser({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// };
  
// displayUser({ name: "Alice", age: 30 });
// displayUser({ name: "Bob", age: 25 });
// displayUser({ name: "Charlie", age: 35 });



// List Property Names:


// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
// };

// const propertyNames = Object.keys(book);

// console.log(propertyNames);  



// Count Properties:


// const std = {
//     name: "Ali",
//     age: 12,
//     grade: 6,
//     school: "City School",
// };

// const propertyNames = Object.keys(std);

// const numOfProperties = propertyNames.length;

// console.log(numOfProperties);



// Iterate Over Keys:


// const product = {
//     name: "Laptop",
//     price: 34000 ,
//     category: "Electronics",
// };
  
// const propertyNames = Object.keys(product);
  
// propertyNames.forEach( property => {
//     console.log(`${property}: ${product[property]}`);
// });



// List Property Values:


// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "Sci-Fi",
// };

// const propertyValues = Object.values(movie);

// console.log(propertyValues);



// Sum Values:


// const scores = {
//     maths: 85,
//     science: 90,
//     english: 88,
// };

// const scoreValues = Object.values(scores);

// const totalSum = scoreValues.reduce(( sum, score ) => sum + score, 0 );

// console.log(totalSum);



// Iterate Over Values:


// const user = {
//     username: "adilkhosa",
//     email: "adil123@example.com",
//     location: "karachi",
// };

// const propertyValues = Object.values(user);

// propertyValues.forEach( value => {
//     console.log(value);
// });



// List Entries:


// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2020,
// };

// const entries = Object.entries(car);

// console.log(entries);




// Convert Object to Array:


// const personObj = {
//     firstName: "Adil",
//     lastName: "Khosa",
//     age: 17,
// };

// const personArr = Object.entries(personObj);

// console.log(personArr);



// Iterate Over Entries:


// const settings = {
//     theme: "dark",
//     notifications: true,
//     privacy: "high",
// };

// const entries = Object.entries(settings);

// entries.forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });



// Filter Keys:


// const inventory = {
//     apples: 13,
//     bananas: 6,
//     oranges: 10,
//     grapes: 4,
// };

// const keysWithMoreThan10 = Object.keys(inventory).filter(key => inventory[key] > 10);

// console.log(keysWithMoreThan10);



// Transform Values:


// const temperatures = {
//     morning: 15,
//     afternoon: 25,
//     evening: 18,
// };

// const temperaturesInFahrenheit = Object
//     .entries(temperatures)
//     .map(([time, tempInCelsius]) => [time, (tempInCelsius * 9/5) + 32]);

// const temperaturesObject = Object.fromEntries(temperaturesInFahrenheit);

// console.log(temperaturesObject);



// Key-Value Swap:


// const roles = {
//     admin: "Administrator",
//     editor: "Editor",
//     viewer: "Viewer",
// };

// const swappedRoles = Object
//     .entries(roles)
//     .map(([key, value]) => [value, key]);

// const swappedRolesObject = Object.fromEntries(swappedRoles);

// console.log(swappedRolesObject);



// Filter and Map:


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterAndMap(array, filterFunc, mapFunc) {
//   return array.filter(filterFunc).map(mapFunc);
// };

// const result = filterAndMap(nums, num => num % 2 !== 0, num => num * num);

// console.log(result);



// Sort and Reduce:


// const words = ["apple", "banana", "cherry", "date"];

// function sortAndReduce (array, sortFunc, reduceFunc) {
//   return array.sort(sortFunc).reduce(reduceFunc);
// };

// const result = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + word);

// console.log(result);



// Simple Callback:


// function greet(name, callback) {
//     const message = `Hello, ${name}!`;
//     callback(message);
// };

// function printGreeting(message) {
//     console.log(message);
// };

// greet("Adil", printGreeting);



// Asynchronous Callback:


// function fetchData(callback) {
//     const simulatedData = { user: "Adil Khosa", age: 17, occupation: "Front-End Developer" };
  
//     setTimeout(() => {
//         callback(simulatedData);
//     }, 2000);
// };

// function displayData(data) {
//     console.log("Fetched Data:", data);
// };

// fetchData(displayData);



// Simple Arrow Function:


// const add = (a,b) => {
//     return a + b;
// };

// console.log(add(3,5));



// Arrow Function with Array Methods:


// const nums = [1, 2, 3, 4, 5];

// const squaredNums = nums.map(num => num * num);

// console.log(squaredNums);



// Variable Scope:


// function outer() {
//     const x = 38;
  
//     function inner() {
//       console.log(x);
//     };
  
//     inner();
// };

// outer();



// Closure:


// function createCounter() {
//     let counter = 0;

//     return function() {
//       counter++;
//       console.log(counter);
//     };
// };

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1();
// counter1();

// counter2();
// counter2();
// counter2();



// Simple Default Parameters:


// function greet( name, greetingMessage = "Hello" ) {
//     console.log(`${greetingMessage}, ${name}!`);
// };

// greet("Alice", "Good morning");

// greet("Bob");



// Default Parameters with Other Arguments:


// function calculateArea( width = 10, height = 5 ) {
//     return width * height;
// };

// const areaWithArgs = calculateArea(15, 7);
// console.log(areaWithArgs);

// const areaWithDefaults = calculateArea();
// console.log(areaWithDefaults);



// Square Numbers:


// const nums = [1, 2, 3, 4, 5];

// const squaredNums = nums.map(num => num * num);

// console.log(squaredNums);



// Convert to Uppercase:


// const words = ["apple", "banana", "cherry"];

// const uppercaseWords = words.map(word => word.toUpperCase());

// console.log(uppercaseWords);



// Filter Even Numbers:


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNums = nums.filter( num => num % 2 === 0 );

// console.log(evenNums);



// Filter Long Words:


// const words = ["apple", "banana", "cherry", "date"];

// const longWords = words.filter( word => word.length > 5 );

// console.log(longWords);



// Log Numbers:


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => console.log(num));



// Log Word Lengths:


// const words = ["apple", "banana", "cherry"];

// words.forEach(word => console.log(word.length));



// Sum of Numbers:


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);



// Concatenate Strings:


// const words = ["Hello", "world", "this", "is", "JavaScript"];

// const sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);

// console.log(sentence);



// Check for Even Number:


// const nums = [1, 3, 5, 7, 8];

// const evenNumber = nums.some(num => num % 2 === 0);

// console.log(evenNumber);



// Check for Long Word:


// const words = ["apple", "banana", "cherry", "date"];

// const longWord = words.some(word => word.length > 5);

// console.log(longWord);



// Check All Even Numbers:


// const nums = [2, 4, 6, 8, 10];

// const allEven = nums.every(num => num % 2 === 0);

// console.log(allEven);



// Check All Long Words:


// const words = ["elephant", "giraffe", "hippopotamus"];

// const allLongWords = words.every(word => word.length > 5);

// console.log(allLongWords);



// Find First Even Number:


// const nums = [1, 3, 5, 7, 8];

// const firstEvenNum = nums.find(num => num % 2 === 0);

// console.log(firstEvenNum);



// Find Long Word:


// const words = ["apple", "banana", "cherry", "date"];

// const firstLongWord = words.find(word => word.length > 5);

// console.log(firstLongWord);



// Find Index of First Even Number:


// const nums = [1, 3, 5, 7, 8];

// const firstEvenIndex = nums.findIndex(num => num % 2 === 0);

// console.log(firstEvenIndex);



// Find Index of Long Word:


// const words = ["apple", "banana", "cherry", "date"];

// const firstLongWordIndex = words.findIndex(word => word.length > 5);

// console.log(firstLongWordIndex);



// Simple Promise:


// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
// };

// delay(2000).then(() => {
//     console.log("Hello, world!");
// });



// Promise Chain:


// function fetchData() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const data = { message: "Data fetched successfully", status: "ok" };
//         resolve(data);
//       }, 1000);
//     });
// };

// fetchData()
// .then(data => {
//     console.log(data);
// });



// Error Handling:


// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const userData = { name: "Adil", age: 17 };

//       if (userData.age === undefined) {
//         reject("Error: Age property is missing.");
//       }
//       else {
//         resolve(userData);
//       }
//     });
// };

// fetchUserData()
// .then(userData => {
//     console.log("User Data:", userData);
// })
// .catch(error => {
//     console.log(error);
// });



// Simulate Network Request:


// function getWeather() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const isSuccess = Math.random() > 0.5;

//         if (isSuccess) {
//           const weatherData = { temperature: 25, condition: "Sunny" };
//           resolve(weatherData);
//         }
//         else {
//           reject("Error: Failed to fetch weather data.");
//         }
//       }, 1000);
//     });
// };

// getWeather()
// .then(weatherData => {
//     console.log("Weather Data:", weatherData);
// })
// .catch(error => {
//     console.log(error);
// });



// Simple async Function:


// function delay(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
// };

// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
// };

// sayHello();



// Fetch Data with async/await:


// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       const userData = { name: "John Doe", age: 30 };

//       if (userData.age === undefined) {
//         reject("Error: Age property is missing.");
//       }
//       else {
//         resolve(userData);
//       };
//     });
// };

// async function getUserData() {
//     try {
//       const userData = await fetchUserData();
//       console.log("User Data:", userData);
//     }
//     catch (error) {
//       console.log("Error:", error);
//     };
// };

// getUserData();



// Fetch and Process Data:


// function fetchUser() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const userData = { name: "Adil", age: 17 };
//         resolve(userData);
//       }, 1000);
//     });
// };

// function fetchPosts(user) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const posts = [
//           { title: "Post 1", content: "Content of post 1" },
//           { title: "Post 2", content: "Content of post 2" }
//         ];
//         resolve(posts);
//       }, 1000);
//     });
// };

// async function getUserAndPosts() {
//     try {
//       const user = await fetchUser();
//       console.log("User Data:", user);

//       const posts = await fetchPosts(user);
//       console.log("User Posts:", posts);
//     }
//     catch (error) {
//       console.error("Error:", error);
//     };
// };

// getUserAndPosts();



// Error Handling in async/await:


// function fetchUser() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const userData = null;

//         if (userData) {
//           resolve(userData);
//         }
//         else {
//           reject("Error: User data not found.");
//         };
//       }, 1000);
//     });
// };

// async function getUserInfo() {
//     try {
//       const user = await fetchUser();
//       console.log("User Data:", user);
//     }
//     catch (error) {
//       console.log(error);
//     };
// };

// getUserInfo();



// Simulate API Calls:


// function apiCall() {
//     return new Promise((resolve, reject) => {
//       const delay = Math.random() * 2000;

//       setTimeout(() => {
//         if (Math.random() > 0.2) {
//           resolve(`Data received after ${Math.round(delay)} ms`);
//         }
//         else {
//           reject("Error: API call failed.");
//         };
//       }, delay);
//     });
// };

// async function getData() {
//     try {
//       const result1 = await apiCall();
//       console.log(result1);
  
//       const result2 = await apiCall();
//       console.log(result2);
  
//       const result3 = await apiCall();
//       console.log(result3);
//     }
//     catch (error) {
//       console.log(error);
//     };
// };

// getData();




// ----------------------------------------------- THE END ----------------------------------------------- //