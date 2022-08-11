var curry = function curry(prim, fun) {
    if (typeof fun != "function") {
        return;
    }

    var args = Array.prototype.slice.call(arguments);
    args.shift();

    var ret = function() {
        var nested_args = Array.prototype.slice.call(arguments);
        return fun.apply(this, args.concat(nested_args));
    }

    return ret;
}

var fun = function() {
    return arguments.length;
};

var curry1 = curry(fun, 1,2,3);
console.log(curry1(4,5,6));

