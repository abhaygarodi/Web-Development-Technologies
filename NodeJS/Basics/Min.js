//Write a function min that takes a array and return minimum number in the set of argument

function min(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(min([5, 2, 9, 1, 7])); 
