const countOccurence = (arr) => {
  arr.sort((a,b)=> a-b);
  const arrayLength = arr.length;
  let occuringElement = arr[0];
  let elementCount = 0;
  const occurence = {};
  if (arrayLength>0) {
    for (let i = 0; i < arrayLength; i++) {
      if (arr[i] === occuringElement) {
        elementCount++;
        occurence[arr[i]] = elementCount;
      }else{
        elementCount = 1;
        occuringElement = arr[i];
        occurence[arr[i]] = elementCount;
      }
    }
  }else{
    return (`invalid array size.`);
  }
  return occurence;
}

const arr = [1, 1, 1, 2, 3, "4", 5, 6, 6];
console.log(countOccurence(arr));