var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral)

console.log("convert to json: ")

console.log(JSON.stringify(objectLiteral))

console.log("convert json back: ")

var jsonValue = JSON.parse('{ "firstName": "Mary", "isAProgrammer": true }')

console.log(jsonValue)