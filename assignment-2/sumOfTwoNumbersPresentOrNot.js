const isSumPresent = ((array, N) => {
  array = array.sort((a,b)=>a-b);
  console.log(array);
  let start = 0, end = array.length - 1;
  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === N) {return true;}
    else if(sum < N) {start++;}
    else {end--;}
  }
  return false;
});

const array = [1, 2, 3, 7, 10, 10, 7];

console.log(isSumPresent(array,10));