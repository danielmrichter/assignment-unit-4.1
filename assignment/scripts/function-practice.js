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
  if (array.length == 0){
    return undefined
  }
  else {
  return array.pop()
  }
} // end getLast
console.log(`Running getLast: `, getLast(testArray));
console.log(`After running getLast: `, testArray);

// I wasn't sure on the previous question if you wanted it to return
// the value without removing it, so I did it both ways.
let backupArray = [1,2,3,4,5,6,7,8,9]
function getLastNoRemove(array){
  console.log(`Running getLastNoRemove with array: `, array);
  if (array.length == 0){
    return undefined
  }
  else {
  let lastNumber = array.length - 1
  return array.at(lastNumber);}
} // end getLastNoRemove
console.log(`Get Last without removing it: `, getLastNoRemove(backupArray));
console.log(backupArray);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  console.log(`Checking for ${value} in ${array}`);
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
function isFirstLetter(letter,string) {
  console.log(`Checking if ${letter} is the first letter of ${string}`);
  if (letter == string[0])
    return true
  else
    return false
  }
console.log(`first letter check:`, isFirstLetter(`d`,`house`));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  console.log(`summing up ${array}`);
  let sum = 0;
  // TODO: loop to add items
  for(let part of array)
    sum += part
  // TODO: return the sum
  return sum
}
console.log(`test sumAll using testarray:`, sumAll(testArray));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  console.log(`checking for positive numbers in ${inputArray}`);
  let positiveArray = []
  for (let number of inputArray)
    if (number > 0) {
      positiveArray.push(number)
    }
  return positiveArray
  }
let testPositiveArray = [1,5,8,4,-3,0,-6,6]
console.log(`before allPositive`, testPositiveArray);
console.log(`test for allPositive`, allPositive(testPositiveArray));
console.log(`After allPositive to make sure array wasn't changed`, testPositiveArray);
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Usually when you buy something, you're asked whether your credit card number, phone number or answer
// to your most secret question is still correct. However, since someone could look over your shoulder,
// you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  let holdingVar
  if (Number.isInteger(cc) ==true) {
    holdingVar = cc.toString()
  }
  if (Number.isInteger(cc) ==false){
    holdingVar = cc
  }
  let lastFour = holdingVar.slice(-4);
  return lastFour.padStart(holdingVar.length, '#')
}
//this isn't a real number, its random
console.log(`test for maskify: ${maskify(2034399002125581)}`);
console.log(`test for maskify: ${maskify(`2034399002125581`)}`);


//I did more, cause I had time, posted below if I figured it out or didn't

//Write a function that will return the count of distinct case-insensitive alphabetic characters and 
//numeric digits that occur more than once in the input string. 
//The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// function duplicateCount(text){
//   let fixedText = text.toLowerCase().trim()
//   fixedText = fixedText.replace(/\s+/g, '');
//   let holdingArray = Array.from(fixedText)
//   let returnValue
//   for (let i=0;i<holdingArray.length;i++){         // I gave up on this, I couldn't
//     if (holdingArray.filter(holdingArray[i]) > 2)  // get it to work, I don't understand
//       holdingArray.splice(holdingArray[i])          // the filter method
//   }
//   for (let part of holdingArray)
//     if (holdingArray.filter(part) == 2)
//       returnValue++
//   return returnValue
//   }
// console.log(`test for duplicateCount ${duplicateCount(`Tessssst phrase`)}`);


//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the 
// "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives 
// one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand 
// is never empty or there is no DNA at all (again, except for Haskell).


function dnaStrand(dna){
  let holdingVar = dna.toUpperCase()  //this is to make it not case sensitive, though its not specified
  holdingVar = Array.from(holdingVar) 
  for(let i=0;i<holdingVar.length;i++){
    if (holdingVar[i] === 'A')
      holdingVar.splice(i,1,`T`)
    else if (holdingVar[i] === `T`)
      holdingVar.splice(i,1,`A`)
    else if (holdingVar[i] === `C`)
      holdingVar.splice(i,1,`G`)
    else if (holdingVar[i] === `G`)
      holdingVar.splice(i,1,`C`)
  }
  return holdingVar.join(``)
} // end dnaStrand
console.log(`test fordnaStrand ${dnaStrand(`ACAAT`)}`);



//Create a function that returns the sum of the two lowest positive numbers given an array 
// of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {  
  let numArray = numbers
  numArray = numArray.sort((a, b) => a - b);
  return numArray[0] + numArray[1]
}



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
