var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log('--------------------------------------')

}.bind(person)

var logPersonName = logName.bind(person);

logPersonName('en');


// call function with the call-func
logName.call(person, 'en', 'es')

logName.apply(person, ['en', 'es']) // parameters have to be handed via array

/*
(function lang(lang1, lang2) {

    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log('--------------------------------------')

}).apply(person, ['en', 'es']);
*/
/**
 * Real world use case
 */

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))
console.log(multiplyByTwo(8))

var multiplyByThree = multiply.bind(this, 3)

console.log(multiplyByThree(4))
console.log(multiplyByThree(8))