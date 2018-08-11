var person = {
    firstName: 'Tony', 
    lastName: 'Weber',
    address: {
        street: '11 Street St.',
        city: 'New York',
        state: 'NY'
    }
}

console.log(person)

function greet(person) {
    console.log('Hi ' + person.firstName)
}

greet(person)


greet({
    firstName: 'Mary',
    lastName: 'Doe'
})

person.address2 = {
    street: '333 Second St.'
}