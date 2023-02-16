// let string = "hexagonal";
// let count = 0;

// -------------------------------------- Ques 1 --------------------------------------
// ------------------- Layman Apporach -------------------

// for (let i = 0; i < string.length - 1; i++) {
//   count =0;
//   for (let j = i; j < string.length - 1; j++) {
//     if (string[i] === string[j]) {
//       count++;
//     }
//   }
//   console.log(`${string[i]} : ${count}`);
// }

// ------------------- Optimized Apporach -------------------

const countElementFrequency = (string) => {
  let counterObject = {};
  let occuringElement = string.charAt(0);
  count = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string.charAt(i) === occuringElement) {
      count++;
      counterObject[string.charAt(i)] = count;
    } else {
      count = 1;
      occuringElement = string.charAt(i);
      counterObject[string.charAt(i)] = count;
    }
  }
  return counterObject;
};

let string = "shreyanshJain";
// console.log(countElementFrequency(string));

// -------------------------------------- Ques 2 --------------------------------------

// ------------------- Layman Apporach --------- find optimal approach---------- remove duplicate from array
let array = [1,3,3,5,5,5,7];
array = array.sort((a,b)=>a-b);
// array.forEach((value,index)=>{
//   if (array[index] ===  array[index+1]) {
//     array.splice(index+1,1);
//   }
// })
let i = 0;
let j = 0;
while (i < array.length) {
  if (array[i] == array) {
    
  }
}


console.log(array);

// -------------------------------------- Ques 3 -------------------------------------- find paindrome

const checkPalindrome = (string)=>{
  string = string.toLowerCase();
  let i =0;
  let j =string.length-1;
  flag = true
  while (i<j) {
    if (string[i] !== string[j]) {
      flag = false;
    }
    i++;
    j--;
  }
  return flag;
}

// let string = "Blade";

// console.log(checkPalindrome(string));

// -------------------------------------- Ques 4 -------------------------------------- find profit loss arrocding to array
// [7,1,3,2,5,2,4];