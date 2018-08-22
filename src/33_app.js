var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

console.log("##################################");

// don`t do this EVER! for demo purposes only
john.__proto__ = person;

for (var prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname
    }
};

var jim = {
    getFirstName: function() {
        return firstname;
    }
};

/**
 * much better way to combine objects
**/
_.extend(john, jane, jim); // combines obj together

console.log(john)