Array.prototype.myCustomFeature = 'cool';

var arr = ['John', 'Jane', 'Jim'];

// avoid this, because you can iterate also in the prototype
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}