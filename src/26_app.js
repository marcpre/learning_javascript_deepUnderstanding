// function immediately invoked with parameter ---> classic example of IIFE
// invoke inside the ()
(function(global, name) {
    var greeting = 'Hello'
    global.greeting = 'Hello'
    console.log(greeting + " " + name)
}(window, 'John'));

console.log(greeting)