const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const leftArr = [];
  const rightArr = [];
  const pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const array = [2, 5, 3, 76, 4, 2, 65, 843, 2, 1];
console.log(quickSort(array));
