console.log(this)

function a() {
    console.log(this)
    this.newVariable = "hello"
}


var b = function () {
    console.log(this)
}

a()
console.log(newVariable)

b()

// here you get the obj back
var c = {
    name: "The c object",
    log: function() {
        var self = this
        
        self.name = "updated c object"
        console.log(self)
        
        var setname = function(newname) {
            self.name = newname
        }
        setname('Updated again! The c object')
        console.log(self)
    }
}
c.log()

