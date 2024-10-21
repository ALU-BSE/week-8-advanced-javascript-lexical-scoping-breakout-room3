### Code Refactoring Challenge


**Challenge:**
Refactor the given code (init_code.js) to use lexical scoping instead of relying on global variables. Ensure that the functions are self-contained and do not depend on variables outside of their lexical scope. The goal is to encapsulate variables within the appropriate scope and reduce reliance on global state.


## Lexical Scoping in JS

Lexical scoping is a concept in JavaScript that determines how variable names are resolved during the runtime of a program. Lexical scoping is also known as static scoping. In lexical scoping, the scope of a variable is defined by its position in the source code.

Here's a breakdown of lexical scoping in JavaScript:

1. **Global Scope:** The outermost scope is the global scope. Variables declared outside of any function or block have global scope and are accessible throughout the entire program.

   ```javascript
   let globalVar = "I'm global";

   function exampleFunction() {
     console.log(globalVar); // Accessible, as it's in the global scope
   }
   ```

2. **Function Scope:** Each function in JavaScript creates its own scope. Variables declared within a function are accessible only within that function, and they have local scope.

   ```javascript
   function exampleFunction() {
     let localVar = "I'm local";
     console.log(localVar); // Accessible within the function
   }

   console.log(localVar); // Error: localVar is not defined
   ```

3. **Lexical Scope:** Lexical scoping means that the scope of a variable is determined by its location in the source code. When a function is defined, it captures the scope in which it was declared. This captured scope is preserved even when the function is executed elsewhere.

   ```javascript
   function outerFunction() {
     let outerVar = "I'm outer";

     function innerFunction() {
       console.log(outerVar); // Accessing outerVar from the lexical scope
     }

     innerFunction();
   }

   outerFunction(); // Outputs: I'm outer
   ```

In the example above, `innerFunction` has access to `outerVar` because it's defined inside `outerFunction`, and it captures the lexical scope of its outer function.

Understanding lexical scoping is crucial when working with closures, where a function retains access to the variables from its outer (enclosing) scope even after that scope has finished execution. Closures make use of lexical scoping to maintain the references to variables.
