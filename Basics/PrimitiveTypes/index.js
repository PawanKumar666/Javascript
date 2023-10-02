/*
Primitive types - String, Boolean, Number, undefined, null

JS is Dynamically typed, a var initialized with one datatype can be changed to another.
This makes writing code easier, but makes it easier to cause bugs, so we use typescript
*/
let strVar = "String"; // String
let numVar = 1; // Number (float is also a 'number' type, we dont have a specific float/double type)
let boolVar = true; // Boolean
let undefVar; //undefined
let nullVar = null; //null - used to explicitly clear a var value usually

//There is another type - Symbol(we will be right back at this)

console.log(strVar, numVar, boolVar, undefVar, nullVar);
