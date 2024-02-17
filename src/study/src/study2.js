function SumAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(SumAll(1, 2, 3, 4, 5));
function SumAll2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (value, _) {
        sum += value;
    });
    return sum;
}
console.log(SumAll2(1, 2, 3, 4, 5));
var timer1 = setTimeout(function () { console.log("hello"); }, 10);
clearTimeout(timer1);
var timer2 = setInterval(function () { console.log("hello"); }, 10);
setTimeout(function () {
    clearInterval(timer2);
}, 50);
