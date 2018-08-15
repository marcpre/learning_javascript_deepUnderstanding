function greet(firstname, lastname, language, ...other) {

    language = language || 'English' // set default parameter

    if (arguments.length === 0) {
        console.log("Missing parameters!")
        console.log('---------------------')
        return
    }

    console.log(firstname)
    console.log(lastname)
    console.log(language)
    console.log(arguments) // special JS keyword
    console.log("arg 0: " + arguments[0]) // special JS keyword
    console.log('---------------------')
}

greet()
greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'Lolonatorisch', 'address', 'test')
