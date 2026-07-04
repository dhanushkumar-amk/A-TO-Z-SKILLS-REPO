# JavaScript Data Types — Complete Guide

> Everything you need to know about **primitive** and **reference** types in JavaScript.

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
| Type       | Description                          | Example              |
|------------|--------------------------------------|----------------------|
| `number`   | Integers and floating-point numbers  | `42`, `3.14`         |
| `string`   | Text                                 | `"Hello"`            |
| `boolean`  | `true` or `false`                    | `true`               |
| `undefined`| Variable declared but not assigned   | `undefined`          |
| `null`     | Intentional empty value              | `null`               |
| `symbol`   | Unique identifier (ES6+)             | `Symbol('id')`       |
| `bigint`   | Large integers (ES2020+)             | `9007199254740991n`  |

### Reference Type (1)
| Type     | Description                              | Example        |
|----------|------------------------------------------|----------------|
| `object` | Collections of key-value pairs & more    | `{}`, `[]`     |

> **Rule of thumb:** Primitives are stored **by value**. Objects are stored **by reference**.

---

## typeof Operator

Use `typeof` to check a value's type at runtime.

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object"  ⚠️ known bug!
console.log(typeof Symbol());     // "symbol"
console.log(typeof 10n);          // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"