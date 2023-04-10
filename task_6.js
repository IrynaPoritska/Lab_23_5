function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
  
    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  function mergeArrays(leftArray, rightArray) {
    const sortedArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }
  
    return [...sortedArray, ...leftArray, ...rightArray];
  }
  
  const unsortedArray = [5, 3, 8, 4, 2, 6, 1, 7];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log(sortedArray);