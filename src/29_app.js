function mapForEach(arr, fn) {
    var newArr = [];
    for(var x = 0; x < arr.length; x++) {
        newArr.push(fn(arr[x]));
    }
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = []
for (var i =1 ;i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);


// functional concept
var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

var arr2 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr2);


// pass function to function
var checkPastLimit =  function(limiter, item) {
    return item > limiter;
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified =  function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);