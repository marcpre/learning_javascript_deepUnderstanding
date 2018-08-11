var person =  new Object() // creating a new object

person['firstName'] = "Tony"
person['lastName'] = "Weber"

var firstNameProperty = "firstName"

console.log(person)
console.log(person[firstNameProperty])


console.log(person.firstName) //using the dot (.) operator
console.log(person.lastName)

person.address = new Object()
person.address.street = "11 Street 789"
person.address.city = "New York"
person.address.state = "NY"

console.log(person.address.street)
console.log(person.address.city)
console.log(person.address.state)

console.log(person["address"]["state"])