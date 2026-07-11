// strings are sequence of characters
// in js strings are immutable
// in js strings are indexed
// in js strings are iterable
// in js strings are comparable
// in js strings are case-sensitive

// in js strings are created using single quotes, double quotes, backticks
// the both string and character are consider as a sequence of characters


let str1 = 'Hello';
let str2 = "Hello";
let str3 = `Hello`;

console.log(str1)
console.log(str2)
console.log(str3)

//  immutable means we can't change the value of the string
let str = 'Hello';
str[0] = 'h';
console.log(str) // it will not change the value of the string the value will be same as the original string
// output: Hello not hello

// we can change the value of the string using the assignment operator
let str = 'Hello';
str = 'hello';
console.log(str) // it will change the value of the string
// output: hello



