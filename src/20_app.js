var arr = [1,
    false,
    {
        name: 'Tony',
        address: '1 Street 2123'

    },
    function(name) {
        var greeting = "Hello";
        console.log(greeting + " " + name)

    },
    'hello'
]


console.log(arr)
arr[3](arr[2].name)