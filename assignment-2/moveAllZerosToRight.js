const moveZeros = (array) => {
  let zeroPointer = 0;
  arrayLength = array.length;
  for (i in array) {
    if (array[i] !== 0) {
      array[zeroPointer] = array[i];
      zeroPointer++;
    }else{
      console.log(`element is not a number`);
      return false
    }
  }
  for (let i = zeroPointer; i < arrayLength; i++) {
    array[i] = 0;
  }
  return array;
}

const array = [0,0,0,8,0];

console.log(moveZeros(array));