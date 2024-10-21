let globalVar = 10;

function addValue(x) {
  return x + globalVar;
}

function multiplyByGlobal(y) {
  return y * globalVar;
}

function updateGlobal(newValue) {
  globalVar = newValue;
}

// Example usage
console.log(addValue(5)); // Output: 15
console.log(multiplyByGlobal(2)); // Output: 20
updateGlobal(5);
console.log(addValue(5)); // Output: 10
