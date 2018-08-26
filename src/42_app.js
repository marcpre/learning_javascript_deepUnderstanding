var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b );

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // its a bug in JS

var z = function() {}
console.log(typeof z);