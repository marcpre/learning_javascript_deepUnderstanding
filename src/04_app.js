function b() {
   console.log(myVar) //outputs the global exeuction context variable -> '1'
}

function a() {
    var myVar = 2
    b()
}

var myVar = 1
a()
