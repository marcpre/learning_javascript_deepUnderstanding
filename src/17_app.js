greet()

function greet() {
    console.log("hi")
}

/**
 * Anonymous Function 
 **/
 
// anonymousGreet()

var anonymousGreet = function () {
    console.log("Hi anon")
}

anonymousGreet()

function log(a) {
    console.log(a)
}

function logf(a) {
    a()
}

log(3)
log("Hello")
log({greeting: 'hi'})
logf(function() {
    console.log('hi, I am a function.')
})