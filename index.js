// Create a prompt that gets numbers seperated by commas
const userInput = prompt('Please enter a few numbers seperated by commas');
// Split the numbers on the ,
const splittedStringArray = userInput.split(',');
// Create empty array
const numberArray = [];
// Convert the strings in the array to number (for loop)
for (let idx = 0; idx < splittedStringArray.length; idx++) {
  // Access the value at each index
  const numberAsString = splittedStringArray[idx];
  // Convert string to number
  const numbered = Number(numberAsString);
  // Take user input and add it to an array
  numberArray.push(numbered);
}

// Create functions

// Length function
const getLength = (array) => {
  // Use the length property to find the length;
  console.log(array.length);
}
getLength(numberArray);

// Sum function
const getSum = (array) => {
  // Assign an initial value
  let sum = 0;
  // Loop through the array 
  for (let idx = 0; idx < array.length; idx++) {
    // Add to the value
    sum = sum + array[idx];
  }
  console.log(sum);
}
getSum(numberArray);

// Mean function

const getMean = (array) => {
  // Assign an initial value
  let sum = 0;
  // Loop through the array
  for (let idx = 0; idx < array.length; idx++) {
    // Add to the value
    sum = sum + array[idx];
  }
  // Calculate the average
  average = sum / array.length;
  console.log(average);
}
getMean(numberArray);