function greet(firstname, lastname, language, ...other) {

    language = language || 'en' // set default parameter

    if (language === 'en') {
        console.log("Hello " + firstname + " " + lastname)
    }

    if (language === 'es') {
        console.log("Hola " + firstname + " " + lastname)
    }
}

function greetEnglish(firstname, lastname, language) {
    greet(firstname, lastname, 'en')
}

function greetSpanish(firstname, lastname, language) {
    greet(firstname, lastname, 'es')
}

greet('John', 'Doe', 'es')
greet('John', 'Doe', 'en')

greetEnglish('John', 'Doe')
greetSpanish('John', 'Doe')
