
let array = [2,3,-2,-4,6,7,8,1];

// array for all questions


// Q1.) [2,3,-2,-4,6,7,8,1] provide the max sum of "n" consecutive number O(n^2).

const maxSumNConsicutiveNumbers = (array,n) => {
  const arrayLength = array.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < arrayLength-n; i++) {
    sum = 0;
    for (let j = i; j < i+n; j++) {
      sum += array[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

// let array = [2,3,-2,-4,6,7,8,1];
// console.log(maxSumNConsicutiveNumbers(array , 3));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1.1.) [2,3,-2,-4,6,7,8,1] provide the max sum of "n" consecutive number O(n).

const maxSumNConsicutiveNumbersOptimized = (array,n) => {
  const arrayLength = array.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[i];
  }
  let i = 0;
  while (i < arrayLength-n){
    sum = sum - array[i] + array[i+n];
    if (sum>maxSum) {
      maxSum = sum;
    }
    i++;
  }
  return maxSum;
}

// let array = [2,3,-2,-4,10,9,8,1];
// console.log(maxSumNConsicutiveNumbersOptimized(array , 3));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q2.) find the longest sub string of a string containing distinct characters.

function longestSubstring(str) {
  let start = 0,
      end = 0,
      maxLength = 0,
      longestSubstring = "",
      charMap = {};
  
  while (end < str.length) {
    let char = str[end];
    if (charMap[char] >= start) {
      start = charMap[char] + 1;
    }
    charMap[char] = end;
    end++;
    if (end - start > maxLength) {
      maxLength = end - start;
      longestSubstring = str.substring(start, end);
    }
  }
  
  return longestSubstring;
}

// console.log(longestSubstring("shreyanshjain"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q3.) find the 3rd largest number.

const _3rdLargest = function (array) {
  try {
    if (array.length < 3) {
      console.log("Array length is less than 3");
    }
    let noDuplicates = []; //initializing a empty array
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (noDuplicates.indexOf(array[i]) === -1) {
        //adding unique values in array
        noDuplicates[index] = array[i];
        index++;
      }
    }
    console.log(noDuplicates);
    noDuplicates.sort((a, b) => b - a); //sorting in decending order
    console.log(noDuplicates);
    return noDuplicates[2]; //returning element at 3rd index that is the third largest
  } catch (error) {
    console.log(error);
  }
};

// let array = [2,3,2,2,10,2,2,1];
// console.log(_3rdLargest(array));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q4.) [2,3,-2,-4,6,7,8,1] provide the min sum of "n" consecutive number.  

const minSumNConsicutiveNumbersOptimized = (array,n) => {
  const arrayLength = array.length;
  let minSum = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[i];
  }
  let i = 0;
  while (i < arrayLength-n){
    sum = sum - array[i] + array[i+n];
    if (sum < minSum) {
      minSum = sum;
    }
    i++;
  }
  return minSum;
}

// let array = [2,3,2,2,10,2,2,1];
// console.log(minSumNConsicutiveNumbersOptimized(array , 3));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q5.) largest sub-array of distinct elements of and array.

function longestContinousSubarray(arr) {
  let start = 0,
      end = 0,
      maxLength = 0,
      longestSubarray = [],
      elementMap = {};
  
  while (end < arr.length) {
    let element = arr[end];
    if (elementMap[element] >= start) {
      start = elementMap[element] + 1;
    }
    elementMap[element] = end;
    end++;
    if (end - start > maxLength) {
      maxLength = end - start;
      longestSubarray = arr.slice(start, end);
    }
  }
  
  return longestSubarray;
}

// console.log(longestContinousSubarray(array));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q6.) make function pass array and num find no. of subarrays whore product is less then the passed number

function numSubarraysWithProductLessThanInput(arr, target) {
  let start = 0,
      end = 0,
      product = 1,
      count = 0;
  
  while (end < arr.length) {
    product *= arr[end];
    while (product >= target && start <= end) {
      product /= arr[start];
      start++;
    }
    count += end - start + 1;
    end++;
  }
  
  return count;
}

// console.log(numSubarraysWithProductLessThanInput(array,20));