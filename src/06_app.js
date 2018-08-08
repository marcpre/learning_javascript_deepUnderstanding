var a = 3 + 4 * 5
console.log(a)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence --> Good overview of operator presendence

// right to left associativity
var a = 2, b = 3, c = 4
a = b = c

console.log(a)
console.log(b)
console.log(c)

// all values are 4

// Grouping
var a = (3 + 4) * 5
console.log(a)