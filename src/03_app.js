function b() {
   var myVar
   console.log(myVar)
}

function a() {
    var myVar = 2
    console.log(myVar)
    b()
}

var myVar = 1
console.log(myVar)
a()
console.log(myVar) // here is a '1' as this is the global execution context
