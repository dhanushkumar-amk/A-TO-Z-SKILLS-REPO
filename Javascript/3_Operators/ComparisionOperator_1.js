// equality operator (==) and strict equality operator (===)
let age  = 18
console.log(age == 18) // true

let userName = "Dhanushkumar"
let entered_userName = "dhanushkuar"
console.log(userName == entered_userName) // false


// compare number with string
console.log(5 == '5') // true  (here string convert this into a number) (this is called type coercion)
console.log(5 === '5') // false


// boolean with number
console.log(true == 1)  // always boolean convert into number


// boolean and string
console.log(true == '1')  // true ( string to number then boolen to number)


// null and undefined
console.log(null == undefined)  // true (js assume null and undefined as same)
console.log(null === undefined)  // false


// empty string with zero
console.log('' == 0) // true (empty string means false in js for boolean)
console.log('' === 0) // false


// boolean and empty string
console.log(false == '') // true
console.log(false === '') // false

// null and false
console.log(null == false) // false 


// undefined and zero
console.log(undefined == 0) // false ( zero has value and undefined not have any value)

// NaN comparisions
console.log(NaN == NaN) // false (NaN is not an any number how we compare)
console.log(NaN === NaN) // false


//  string and boolean
console.log('true' == true)  // string to number (true => to NaN) // false
console.log('false' == false) // (false => NaN) // false


// zero prefix string into number
console.log('001' == 1)  // convert string into a number (then zeros gone (prefix)) // true
console.log('010' == 10) // true

