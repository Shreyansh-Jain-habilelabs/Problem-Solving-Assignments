function countOccurence(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      let digit = arr[i].toString();
      if (result[digit] === undefined) {
        result[digit] = 1;
      } else {
        result[digit]++;
      }
    }else{
      console.log(`is not a number`);
      return false;
    }
  }
  return result;
}

const arr = [1, 1, 1, 2, 3, "4", 5, 6, 6];
console.log(countOccurence(arr));
