// Number
// Number is a primitive data type that represents both integer and floating-point numbers.
// It is a numeric data type that can be used to store and manipulate numbers.


// Integer
// Integer is a primitive data type that represents whole numbers.
// It is a numeric data type that can be used to store and manipulate whole numbers.
// Example: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let a = 10;
console.log(a); // 10
console.log(typeof a); // number


// Floating-point
// Floating-point is a primitive data type that represents numbers with a decimal point.
// Example: 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5

let b = 1.5;
console.log(b); // 1.5
console.log(typeof b); // number


// special numbers
// Special numbers are numbers that are not normal numbers.
// Example: NaN, Infinity, -Infinity

// NaN
// NaN is a special number that represents a value that is not a number.
// not a number means that the value is not a number.
// Example: "string" / 2

let d = "string" / 2;
console.log(d); // NaN
console.log(typeof d); // number

// Infinity
// Infinity is a special number that represents a value that is infinite.
// anything divided by 0 is infinity.
// Example: 1 / 0

let e = 1 / 0;
console.log(e); // Infinity
console.log(typeof e); // number

// -Infinity
// -Infinity is a special number that represents a value that is infinite and negative.
// Example: -1 / 0

let f = -1 / 0;
console.log(f); // -Infinity
console.log(typeof f); // number


// typeof operator
// typeof operator is used to check the type of a variable.
let value = 20;
console.log(typeof value); // number