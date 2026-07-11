// Bigint is a data type that is used to store large integers.
// Bigint is a 64-bit integer.
// Bigint is a 128-bit integer.
// Bigint is a 256-bit integer.
// Bigint is a 512-bit integer.
// Bigint is a 1024-bit integer.
// Bigint is a 2048-bit integer.
// Bigint is a 4096-bit integer.
// Bigint is a 8192-bit integer.
// Bigint is a 16384-bit integer.
// Bigint is a 32768-bit integer.
// Bigint is a 65536-bit integer.


let a = 100;
console.log(a);
console.log(typeof a);

// Range of an number
// 1.5 * 10^308
// 1.5 * 10^-308

// 1.5 * 10^308 is the maximum value of a number. (maximum value of a number)
// 1.5 * 10^-308 is the minimum value of a number. (minimum value of a number)

//  on negative side 
console.log(Number.MIN_VALUE); // 5e-324n (2^52 - 1) (minimum value of a number) (Number.MIN_VALUE is a constant that represents the smallest positive value that can be represented in the number system.)
console.log(typeof Number.MIN_VALUE);

// on positive side
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308n (2^52 - 1) (maximum value of a number) (Number.MAX_VALUE is a constant that represents the largest positive value that can be represented in the number system.)
console.log(typeof Number.MAX_VALUE);


// now the probelm on number is that it can't store large integers. so we use bigint to store large integers.
// we do this by adding n to the end of the number.
// ex:
let largeNumber = 123456789012345678901234567890n;
console.log(largeNumber);
console.log(typeof largeNumber);



  

// don'ts
// let k = 10.05n; we can't add  float values to bigint
// console.log(k)


// can't do any arthmetic operation based on bigin and numbers
let num1 = 100n;
let num2 = 200n;
console.log(num1 + num2)   // it will work


let val1 = 100n;
let val2 = 200;
// console.log(val1 + val2)  // it will not work



