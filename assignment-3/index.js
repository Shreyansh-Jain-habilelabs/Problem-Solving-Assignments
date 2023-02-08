const maxSubarraySum = (array, k) => {
  arrayLength = array.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i <= arrayLength - k; i++) {
    sum = 0;
    for (let j = i; j < k+i; j++) {
      sum += array[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

let array = [2, 3, 5, 7, 3, 1, 5, 5, 7];

// console.log(maxSubarraySum(array, 3));

const maxSubarraySumComplex = ()=>{
  arrayLength = array.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i <= arrayLength - k; i++) {
    sum = 0;
  }
  
  for (let j = i; j < k+i; j++) {
    sum += array[j];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
};