console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log(`In helloName with parameter: `, name);
  return `Hello, ` + name + `!`;
} // end helloName
// Remember to call the function to test
console.log(`Test for helloName: `, helloName(`Stacy`));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log(`In addNumbers with parameters: `, firstNumber, secondNumber);
  return firstNumber + secondNumber;
} // end addNumbers
console.log(`Adding some numbers: `, addNumbers(543,45738));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne,numTwo,numThree) {
  console.log(`In multiplyThree with parameters: `, numOne , numTwo , numThree );
  return numOne * numTwo * numThree;
} // end multiplyThree
console.log(`Test for multiplyThree: `, multiplyThree(3, 9, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  console.log(`Checking if`, number, `is positive`);
  if (number > 0) {
    return true;
  }
  else 
    return false;
}
console.log(`positive check: Is this number positive?:`, isPositive(5));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(`negative check: Is this number positive?:`, isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let testArray = [1,2,3,4,5,6,7,8,9]
console.log(`before running the function:`, testArray);
function getLast(array) {
  console.log(`the array to check the last number of: `, array);
  return array.pop()
} // end getLast
console.log(`Running getLast: `, getLast(testArray));
console.log(`After running getLast: `, testArray);

// I wasn't sure on the previous question if you wanted it to return
// the value without removing it, so I did it both ways.
let backupArray = [1,2,3,4,5,6,7,8,9]
function getLastNoRemove(array){
  console.log(`Running getLastNoRemove with array: `, array);
  let lastNumber = array.length - 1
  return array.at(lastNumber);
} // end getLastNoRemove
console.log(`Get Last without removing it: `, getLastNoRemove(backupArray));
console.log(backupArray);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  console.log(`Checking for`, value, `in`, array);
  for (let i=0; i<array.length; i++) {
   if (array[i] == value)
    return true
  else if (i==array.length -1)
    return false
}
} // end find
console.log(`positive test run of find: `, find(3,testArray));
console.log(`negative test run of find: `, find(33,testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
