function createGlobalVariableManager(initialValue) {
  // Local variable in the lexical scope
  let localVar = initialValue;

  // Inner function to add a value
  function addValue(x) {
    return x + localVar; // Accessing localVar from the outer scope
  }

  // Inner function to multiply by the local variable
  function multiplyByLocal(y) {
    return y * localVar; // Accessing localVar from the outer scope
  }

  // Inner function to update the local variable
  function updateLocal(newValue) {
    localVar = newValue; // Updating the local variable
  }

  // Returning an object that exposes the inner functions
  return {
    addValue,
    multiplyByLocal,
    updateLocal
  };
}

// Example usage
const localVarManager = createGlobalVariableManager(10);
console.log(localVarManager.addValue(5)); // Output: 15
console.log(localVarManager.multiplyByLocal(2)); // Output: 20
localVarManager.updateLocal(5);
console.log(localVarManager.addValue(5)); // Output: 10