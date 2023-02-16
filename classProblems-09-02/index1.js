// --------------------------- profitAndLoss ---------------------------

function BuyAndSell(array,k,l) {
  let result = array[k] - array[l];

  if (result < 0) {
    console.log("Loss: ", result);
  } else if (result > 0) {
    console.log("Profit: ", result);
  }
}

const indexArray = [2, 3, 5, 7, 11, 13];
BuyAndSell(indexArray,1,3);

// --------------------------- duplicate removal ---------------------------

function removeDuplicates(arr) {
  arr.sort((a, b) => a - b);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
}

let arr = [1, 2, 2, 4, 2, 5, 6, 8, 6, 6, 6, 6, 3, 3, 4, 5];
let uniqueArray = removeDuplicates(arr);
console.log(uniqueArray);

// --------------------------- palindrome check ---------------------------

function check_palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x != y) {
      return false;
    } else {
      return true;
    }
  }
}

let ans = check_palindrome("racecar");
console.log(ans);

// --------------------------- unique Value array ---------------------------

function countOccurence(string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
  //   if (typeof string[i] === "number") {
      let alphabet = string[i];
      if (result[alphabet] === undefined) {
        result[alphabet] = 1;
      } else {
        result[alphabet]++;
      // }
    }
  }
  return result;
}

const string = "hexagonal";
console.log(countOccurence(string));