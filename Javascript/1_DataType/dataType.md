# JavaScript Data Types — Complete Guide

> Everything you need to remember about **primitive** and **reference** types in JavaScript.

---

## Table of Contents

1. [Overview](#overview)
2. [typeof Operator](#typeof-operator)
3. [Number](#number)
4. [String](#string)
5. [Boolean](#boolean)
6. [Undefined](#undefined)
7. [Null](#null)
8. [Symbol](#symbol)
9. [BigInt](#bigint)
10. [Object](#object)
11. [Type Coercion](#type-coercion)
12. [Type Checking Tips](#type-checking-tips)
13. [Quick Reference](#quick-reference)

---

## Overview

JavaScript has **8 data types**:

### Primitive Types (7)

| Type        | Description                          | Example              |
|-------------|--------------------------------------|----------------------|
| `number`    | Integers and floating-point numbers  | `42`, `3.14`         |
| `string`    | Text                                 | `"Hello"`            |
| `boolean`   | `true` or `false`                    | `true`               |
| `undefined` | Variable declared but not assigned   | `undefined`          |
| `null`      | Intentional empty value              | `null`               |
| `symbol`    | Unique identifier (ES6+)             | `Symbol('id')`       |
| `bigint`    | Large integers (ES2020+)             | `9007199254740991n`  |

### Reference Type (1)

| Type     | Description                           | Example        |
|----------|---------------------------------------|----------------|
| `object` | Collections of key-value pairs & more | `{}`, `[]`     |

> **Rule of thumb:** Primitives are stored **by value**. Objects are stored **by reference**.

---

## typeof Operator

Use `typeof` to check a value's type at runtime.

```javascript
console.log(typeof 42);            // "number"
console.log(typeof "hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"  ⚠️ known bug!
console.log(typeof Symbol());      // "symbol"
console.log(typeof 10n);           // "bigint"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function(){});  // "function"
```

### typeof Gotchas

| Value              | typeof result | Why it matters                          |
|--------------------|---------------|-----------------------------------------|
| `null`             | `"object"`    | Historical bug — use `=== null` instead |
| `[]`               | `"object"`    | Use `Array.isArray()` for arrays        |
| `function(){}`     | `"function"`  | Only non-object type that isn't primitive |

---

## Number

`number` is a **primitive** type for integers and floating-point values.

### Integer

Whole numbers without a decimal point.

```javascript
let a = 10;
console.log(a);          // 10
console.log(typeof a);   // "number"
```

### Floating-Point

Numbers with a decimal point.

```javascript
let b = 1.5;
console.log(b);          // 1.5
console.log(typeof b);   // "number"
```

### Number Limits

JavaScript numbers use **IEEE 754 double-precision** (64-bit). Safe integer range:

```javascript
Number.MAX_SAFE_INTEGER;  // 9007199254740991  (2^53 - 1)
Number.MIN_SAFE_INTEGER;  // -9007199254740991 (-(2^53 - 1))
```

Smallest and largest **positive** representable numbers:

```javascript
Number.MIN_VALUE;  // 5e-324  (smallest positive value > 0)
Number.MAX_VALUE;  // 1.7976931348623157e+308  (largest finite number)
```

> Beyond `MAX_SAFE_INTEGER`, integers lose precision — use **BigInt** for large integers.

### Special Numbers

| Value       | How it happens        | typeof  |
|-------------|-----------------------|---------|
| `NaN`       | Invalid math (`"x"/2`)| `number`|
| `Infinity`  | `1 / 0`               | `number`|
| `-Infinity` | `-1 / 0`              | `number`|

```javascript
let d = "string" / 2;
console.log(d);          // NaN
console.log(typeof d);   // "number"

let e = 1 / 0;
console.log(e);          // Infinity

let f = -1 / 0;
console.log(f);          // -Infinity
```

### NaN Rules (remember!)

- `NaN` means **Not a Number** but its `typeof` is still `"number"`
- `NaN === NaN` is **false** — use `Number.isNaN(value)` instead
- Any operation with `NaN` returns `NaN`

---

## String

A **sequence of characters**. In JS, strings and single characters are both strings.

### Creating Strings

```javascript
let str1 = 'Hello';   // single quotes
let str2 = "Hello";   // double quotes
let str3 = `Hello`;   // backticks (template literals — allow interpolation)
```

### Key Properties

| Property        | Meaning                                              |
|-----------------|------------------------------------------------------|
| Immutable       | Cannot change individual characters in place         |
| Indexed         | Access chars via index: `str[0]`                     |
| Iterable        | Can loop with `for...of`                             |
| Comparable      | `===`, `<`, `>` work lexicographically               |
| Case-sensitive  | `"A" !== "a"`                                        |

### Immutability

```javascript
let str = 'Hello';
str[0] = 'h';       // does NOT change the string
console.log(str);   // "Hello"  (unchanged)

// Reassignment works — you replace the whole value
str = 'hello';
console.log(str);   // "hello"
```

### Template Literals

```javascript
let name = "World";
let greeting = `Hello, ${name}!`;  // "Hello, World!"
```

---

## Boolean

Represents **true** or **false**.

### Creating Booleans

```javascript
let bool1 = true;
let bool2 = false;

// Via Boolean constructor / function
let bool3 = Boolean(1);    // true
let bool4 = Boolean(0);    // false
let bool5 = Boolean("");   // false
let bool6 = Boolean("hi"); // true
```

### Operations

| Operation type   | Works? | Example                    |
|------------------|--------|----------------------------|
| Arithmetic       | Avoid  | `true + true` → `2` (coerced to number) |
| Logical          | Yes    | `&&`, `\|\|`, `!`           |
| Comparison       | Yes    | `true == false` → `false`  |

```javascript
console.log(typeof bool1);  // "boolean"

// Logical operations
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false
```

### Falsy vs Truthy

**Falsy values (6):** `false`, `0`, `""`, `null`, `undefined`, `NaN`

Everything else is **truthy** (including `"0"`, `"false"`, `[]`, `{}`).

---

## Undefined

Represents a variable that has been **declared but not assigned** a value.

```javascript
let undef1 = undefined;   // explicit
let a;                    // implicit — default for uninitialized variables
console.log(a);           // undefined
console.log(typeof a);    // "undefined"
```

### When you get `undefined`

| Situation                        | Example                          |
|----------------------------------|----------------------------------|
| Variable declared, no value      | `let x;`                         |
| Function with no return            | `function f(){}` → `f()`        |
| Missing object property            | `{}.foo`                         |
| Missing function argument          | `function f(x){}` called as `f()`|
| `void` expression                  | `void 0`                         |

### undefined vs null

|           | `undefined`                    | `null`                        |
|-----------|--------------------------------|-------------------------------|
| Meaning   | "Not assigned yet"             | "Intentionally empty"         |
| Set by    | JavaScript engine              | Developer                     |
| typeof    | `"undefined"`                  | `"object"` (bug)              |

---

## Null

Represents an **intentional absence** of any object value.

```javascript
let user = null;          // explicitly "no value"
console.log(user);        // null
console.log(typeof user); // "object"  ⚠️ historical bug
```

### Checking for null

```javascript
value === null        // best way
value == null         // true for both null AND undefined
Object.prototype.toString.call(null)  // "[object Null]"
```

---

## Symbol

Introduced in **ES6**. A unique, immutable identifier — often used as object property keys.

```javascript
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2);  // false — every Symbol is unique
console.log(typeof id1);   // "symbol"
```

### Use Cases

- Hidden / unique object keys
- Prevent naming collisions
- Well-known symbols: `Symbol.iterator`, `Symbol.toStringTag`

```javascript
const obj = {
  [Symbol('secret')]: 42
};
// Symbol keys are NOT visible in Object.keys() or for...in
```

### Global Symbol Registry

```javascript
Symbol.for('app.id');  // creates or retrieves shared symbol
Symbol.keyFor(sym);    // reverse lookup
```

---

## BigInt

Introduced in **ES2020**. Stores **arbitrary-precision integers** beyond `Number.MAX_SAFE_INTEGER`.

### Creating BigInt

Append **`n`** to the end of an integer literal:

```javascript
let largeNumber = 123456789012345678901234567890n;
console.log(largeNumber);        // 123456789012345678901234567890n
console.log(typeof largeNumber); // "bigint"

// Or via BigInt() constructor
let big = BigInt("9007199254740991000");
```

### Why BigInt exists

Regular `number` cannot safely store integers larger than `2^53 - 1`:

```javascript
9007199254740991 + 1;  // 9007199254740992  ✓ still safe
9007199254740991 + 2;  // 9007199254740992  ✗ precision lost!
```

### Rules & Don'ts

| Rule                                      | Example                          |
|-------------------------------------------|----------------------------------|
| No decimals allowed                       | `10.05n` → SyntaxError           |
| BigInt + BigInt works                     | `100n + 200n` → `300n`           |
| BigInt + Number does NOT work             | `100n + 200` → TypeError         |
| Must convert to mix types                 | `100n + BigInt(200)` or `Number(100n) + 200` |
| Cannot use with `Math` methods            | Use BigInt operators instead     |
| Cannot use with `parseInt` on mixed types | Convert explicitly               |

```javascript
let num1 = 100n;
let num2 = 200n;
console.log(num1 + num2);   // 300n  ✓

let val1 = 100n;
let val2 = 200;
// console.log(val1 + val2);  // TypeError  ✗
```

---

## Object

The only **non-primitive** (reference) type. Includes plain objects, arrays, functions, dates, and more.

### Plain Object

```javascript
let person = { name: "Alice", age: 30 };
console.log(typeof person);  // "object"
```

### Array

```javascript
let arr = [1, 2, 3];
console.log(typeof arr);     // "object"
console.log(Array.isArray(arr));  // true
```

### Function

```javascript
function greet() { return "hi"; }
console.log(typeof greet);   // "function"
```

### Reference vs Value

```javascript
let a = { x: 1 };
let b = a;       // b points to same object in memory
b.x = 2;
console.log(a.x);  // 2  — both variables share the reference
```

### Common Object Subtypes

| Subtype    | Check with                        |
|------------|-----------------------------------|
| Array      | `Array.isArray(val)`              |
| Date       | `val instanceof Date`             |
| RegExp     | `val instanceof RegExp`           |
| Map / Set  | `val instanceof Map` / `Set`      |
| Plain obj  | `Object.prototype.toString.call(val) === '[object Object]'` |

---

## Type Coercion

JavaScript automatically converts types in certain contexts.

### Implicit Coercion

```javascript
"5" + 1;      // "51"   (number → string, + prefers string concat)
"5" - 1;      // 4      (string → number)
true + 1;     // 2      (boolean → number: true=1, false=0)
!!"hello";    // true   (value → boolean)
```

### Explicit Coercion

```javascript
String(42);     // "42"
Number("42");   // 42
Boolean(0);     // false
parseInt("42px");   // 42
parseFloat("3.14"); // 3.14
```

### == vs ===

| Operator | Behavior              | Recommendation |
|----------|-----------------------|----------------|
| `==`     | Coerces types first   | Avoid          |
| `===`    | Strict, no coercion   | **Always use** |

```javascript
0 == false;    // true  (coercion)
0 === false;   // false (different types)
null == undefined;  // true
null === undefined; // false
```

---

## Type Checking Tips

### Reliable Checks

```javascript
// Primitives
typeof value === "string"
typeof value === "number"
typeof value === "boolean"
typeof value === "undefined"
typeof value === "bigint"
typeof value === "symbol"

// null
value === null

// Array
Array.isArray(value)

// NaN
Number.isNaN(value)       // preferred over isNaN()

// Integer
Number.isInteger(value)

// Safe integer
Number.isSafeInteger(value)

// Plain object
Object.prototype.toString.call(value) === "[object Object]"
```

### Avoid These Pitfalls

```javascript
typeof null === "object"     // false positive
typeof [] === "object"       // can't distinguish array
typeof NaN === "number"      // true but NaN isn't a real number
value == null                // catches both null AND undefined
```

---

## Quick Reference

### All 8 Types at a Glance

```
Primitive:  number | string | boolean | undefined | null | symbol | bigint
Reference:  object (includes arrays, functions, dates, etc.)
```

### typeof Cheat Sheet

```
typeof 42           → "number"
typeof "hi"         → "string"
typeof true         → "boolean"
typeof undefined    → "undefined"
typeof null         → "object"    ⚠️
typeof Symbol()     → "symbol"
typeof 10n          → "bigint"
typeof {}           → "object"
typeof []           → "object"
typeof function(){} → "function"
```

### Falsy Values (memorize)

```
false | 0 | "" | null | undefined | NaN
```

### Number Special Values

```
NaN        — invalid number result
Infinity   — overflow (e.g. 1/0)
-Infinity  — negative overflow
Number.MAX_SAFE_INTEGER  — 9007199254740991
Number.MIN_SAFE_INTEGER  — -9007199254740991
```

### BigInt Rules (memorize)

```
✓  Append n:  123n
✓  BigInt + BigInt
✗  No floats:  10.5n
✗  No mixing:  100n + 200  (TypeError)
```

### String Rules (memorize)

```
✓  'single' | "double" | `template`
✓  Immutable — reassign whole string, can't mutate chars
✓  Indexed, iterable, case-sensitive
```

### Boolean Rules (memorize)

```
✓  true | false
✓  Logical ops: && || !
✗  Avoid arithmetic on booleans (coerces to 0/1)
```

### Undefined Rules (memorize)

```
✓  Default value for uninitialized variables
✓  Returned when function has no return value
✓  typeof → "undefined"
```

---

## Related Files

| File              | Topic                    |
|-------------------|--------------------------|
| `Numbers.js`      | Number examples          |
| `Strings.js`      | String examples          |
| `Boolean.js`      | Boolean examples         |
| `Undefined.js`    | Undefined examples       |
| `Bigint.js`       | BigInt examples          |
