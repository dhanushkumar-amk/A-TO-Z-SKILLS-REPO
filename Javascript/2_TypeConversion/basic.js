let a = 123;
console.log(a)
console.log(typeof a) // number


// now i want to convert this number into string
let b = String(a)
console.log(b)
console.log(typeof b) // string


a = String(a)
console.log(a)
console.log(typeof a)  // string


// boolean into a String

console.log("\n Boolen into a string " + "\n")

let value = false;
console.log(value)
console.log(typeof value)

value = String(value)
console.log(value)
console.log(typeof value)

//  string into a number
console.log("\n string into a number " + "\n")

let str = "123"
console.log(str)
console.log(typeof str)


str = Number(str)
console.log(str)
console.log(typeof str)


//  charcter into number
console.log("\n string into a number (character) " + "\n")

let str1 = "dhanush"
console.log(str1)
console.log(typeof str1)


str1 = Number(str1)
console.log(str1)  // NaN  so solve this parsint
console.log(typeof str1)

let word = "123dhnaush"

let str2 = parseInt(word)
console.log(str2)  // 123
console.log(typeof str2)


