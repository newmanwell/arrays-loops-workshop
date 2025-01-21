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

// Min function
const getMin = (array) => {
  // Start with the Zeroth index
  let currentSmallest = array[0];
  // Loop through the array starting with the first index
  for (let idx = 1; idx < array.length; idx++) {
    // Create conditional that compares the current smallest to the next index value
    if (array[idx] < currentSmallest) {
      // Reassign current smallest number variable to the new index value (if smaller)
      currentSmallest = array[idx];
    }
  }
  console.log(currentSmallest);
}
getMin(numberArray);

//Max function
const getMax = (array) => {
  // Start with the zeroth index
  let currentLargest = array[0];
  // Loop through the array starting with the first index
  for (let idx = 1; idx < array.length; idx++) {
    // Create conditional that compares the current largest to the next index value
    if (array[idx] > currentLargest) {
      // Reassign current largest number variable to the new index value (if larger)
      currentLargest = array[idx];
    }
  }
  console.log(currentLargest);
}
getMax(numberArray);

// Range function
const getRange = (array) => {
  // Store largest number starting with the zeroth index
  let currentLargest = array[0];
  // Store smallest number staring with the zeroth index
  let currentSmallest = array[0];
  // Loop through the array for the largest index value
  for (let idx = 1; idx < array.length; idx++) {
    // Create conditional that compares the current largest to the next index value
    if (array[idx] > currentLargest) {
      // Reassign current largest variable if it is larger
      currentLargest = array[idx];
    }
  }
  // Loop through the array for the smallest index value
  for (let idx = 1; idx < array.length; idx++) {
    // Create conditional that compares the current smallest to the next index value
    if (array[idx] < currentSmallest) {
      currentSmallest = array[idx];
    }
  }
  // Subract to find the range
  const range = currentLargest - currentSmallest;
  console.log(range);
}
getRange(numberArray);