// function statement
function greet(name) {
    console.log("Hello " + name)
}

greet('John')

// using a function expression
var greetFunc = function(name) {
    console.log("Hello " + name)
}

greetFunc('John')

// immediately invoked function expression
var greeting = function(name) {

    return "Hello " + name

}('IEF')

console.log(greeting);

var firstname = 'Do Not';

// function immediately invoked with parameter ---> classic example of IIFE
// invoke inside the ()
(function(name) {
    var greeting = 'Hello'
    console.log(greeting + " " + name)
}(firstname));

// invoke outside the ()
(function(name) {
    var greeting = 'Hello'
    console.log(greeting + " " + name)
})(firstname);
