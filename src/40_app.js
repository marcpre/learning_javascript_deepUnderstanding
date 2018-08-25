class Person {
    constructor(firstname, lastname) {
        this.firstname =  firstname;
        this.lastname = lastname;
    }
    
    greet() {
        return "Hi " + firstname;
    }
}

var john =  new Person("John", "Doe");
console.log(john)