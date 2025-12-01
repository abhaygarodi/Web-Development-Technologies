function transformToObjects(numberArray) {
    return numberArray.map(num => ({ val: num }));
}

// Example:
console.log(transformToObjects([1, 2, 3]));
