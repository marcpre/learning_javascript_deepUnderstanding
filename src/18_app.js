// by value
var a = 3
var b

b = a

a = 2 
 
console.log("a: " + a)
console.log("b: " + b)

// by reference (all objects (including functions))

var c = { greeting: 'hi' }
var d

d = c
c.greeting = 'hello'

console.log("c")
console.log(c)
console.log("d")
console.log(d)

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'
}

changeGreeting(d)
console.log("c")
console.log(c)
console.log("d")
console.log(d)

// equals operator sets up new memory space
c = { greeting: 'howdy' }
console.log("c")
console.log(c)
console.log("d")
console.log(d)
