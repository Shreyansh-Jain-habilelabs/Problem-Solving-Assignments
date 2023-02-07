const sum = ((arr, N) => {
  arr = arr.sort();
  let start = 0, end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === N) return true;
    else if (sum < N) start++;
  }
  return false;
});

const array = [1, 2, 3, 7, 5, 6, 7];

console.log(sum(array, 20));