String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));


Number.prototype.isPositive = function() {
    return this > 0;
}
console.log(3.isPositive);
var a = Number(3);
console.log(a.isPositive);