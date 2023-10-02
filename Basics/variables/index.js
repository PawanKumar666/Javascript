/* Its better to use let over var due to the following reasons - 

In JavaScript, the `let` and `var` keywords are used for variable declaration, but there are significant differences between them in terms of scope, hoisting, and block-level scope. Generally, it's recommended to use `let` over `var` in modern JavaScript for several reasons:

1. **Block-Level Scope:**
   
   - `let` is block-scoped, which means it is confined to the block (enclosed by curly braces) in which it is declared. Variables declared with `let` are not accessible outside of their containing block. This helps avoid unintended variable hoisting issues and reduces the likelihood of variable conflicts.

   - `var`, on the other hand, has function-level scope. Variables declared with `var` are scoped to the nearest function or, if not within a function, they have global scope. This can lead to unexpected behavior, especially when used within loops or conditional statements.

2. **Temporal Dead Zone (TDZ):**

   - `let` variables are subject to the Temporal Dead Zone (TDZ). This means that if you try to access a `let` variable before it is declared in the code, you'll get a ReferenceError. This behavior helps catch potential issues early in development.

   - `var` variables are hoisted and initialized with `undefined`, which can lead to subtle bugs when you unintentionally access a variable before declaring it.

3. **Reassignment:**

   - Both `let` and `var` allow reassignment of values. However, `let` is often preferred because it encourages a more predictable and less error-prone code structure. With `var`, it's easier to accidentally reassign a variable that you intended to be constant.

4. **Compatibility with Modern JavaScript:**

   - `let` was introduced in ECMAScript 6 (ES6) and is a feature of modern JavaScript. It provides more predictable and safer variable scoping behavior compared to `var`. As a result, using `let` is recommended for writing code that adheres to modern best practices.

5. **Strict Mode:**

   - When you use `"use strict";` mode in JavaScript, using `var` can cause additional issues and restrictions that may not be immediately obvious. `let`, on the other hand, works consistently in strict mode.

In summary, while `var` is still valid JavaScript and can be used in certain scenarios, it's generally a good practice to use `let` for variable declaration in modern JavaScript code. `let` provides block-level scoping, helps prevent hoisting-related bugs, and encourages more predictable and maintainable code.*/

let firstName = "Lets Study variables !"; //By default it will be initialised to 'undefined' when we dont assign a value
alert(firstName); // use camelcasing, also variables are case sensitive

// To define multiple variables

let fName = "First",
  lName = "Last"; // not best practice, use separate declarations
console.log(fName, lName);

// Using constants

const uTruth = "Pawan is a noob in JS !";
// uTruth = "Yes"; const value cannot be reassigned
console.log(uTruth);
