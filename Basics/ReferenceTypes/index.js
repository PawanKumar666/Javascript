/*
Reference types in JS - 

In JavaScript, reference types are a category of data types that store references or addresses to objects rather than storing the actual data directly. Reference types are also sometimes called "composite" or "non-primitive" types. They include:

1. **Object**:
   - The most fundamental reference type in JavaScript.
   - Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects.
   - Examples of objects include plain objects, arrays, functions, and more complex data structures like sets and maps.

```javascript
const person = { name: "John", age: 30 };
const colors = ["red", "green", "blue"];
```

2. **Function**:
   - Functions are also objects in JavaScript.
   - They can be assigned to variables, passed as arguments, and returned from other functions.
   - Functions can have properties and methods, just like any other object.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

const sayHello = greet;
sayHello("Alice"); // Outputs: Hello, Alice!
```

3. **Arrays**:
   - Arrays are ordered collections of values.
   - They are a specialized type of object and can hold a mix of data types, including other objects and functions.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

4. **Date**:
   - The `Date` object represents dates and times.
   - It is used for working with dates, times, and time zones.

```javascript
const currentDate = new Date();
```

5. **RegExp (Regular Expression)**:
   - The `RegExp` object represents regular expressions and is used for pattern matching within strings.

```javascript
const pattern = /[0-9]+/;
```

6. **Error**:
   - The `Error` object represents runtime errors in JavaScript.
   - It includes information about the error, such as the error message and stack trace.

```javascript
try {
  // Some code that may throw an error
} catch (error) {
  console.error(error.message);
}
```

7. **Map and Set**:
   - `Map` and `Set` are collection classes introduced in ES6 for storing key-value pairs and unique values, respectively.

```javascript
const myMap = new Map();
myMap.set("name", "Alice");

const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
```

8. **Promise**:
   - The `Promise` object represents the eventual completion (or failure) of an asynchronous operation.
   - It is commonly used for handling asynchronous tasks such as fetching data from a server.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    if (operation successful) {
        resolve(data);
    } else {
      reject(error);
    }
  });
};
```

These reference types are essential for working with complex data structures and implementing various programming patterns in JavaScript. Understanding how reference types work is crucial for effective JavaScript development.
*/
let currentIndianPM = {
  name: "Modi",
  party: "BJP",
};

const firstIndianPM = {
  name: "Nehru",
  party: "INC",
};

console.log(
  "Current Indian PM -",
  currentIndianPM.name + " First Indian PM -",
  firstIndianPM["name"]
);

// Arrays

let bodyParts = ["face", "hand"];
bodyParts[bodyParts.length] = "legs";
console.log(bodyParts);

// Functions
function firstFuntion(bodyParts, pm, squareNum, others) {
  console.log(
    "Our pm - ",
    pm.name + " has - ",
    bodyParts + " others are - ",
    others
  );
  return squareNum * squareNum;
}
let returnValue = firstFuntion(bodyParts, firstIndianPM, (squareNum = 2));
console.log(returnValue);
