module.exports = function Spy(target, method) {
    var originalFunc = target[method];
    // use an object that we can pass by reference, not value
    // the property of this object can be updated from this scope
    var result = {count: 0};
    // redefine the function
    target[method] = function() {
        // track function was called
        result.count++;
        // apply original funciton
        return originalFunc.apply(this, arguments);
    };
    // return an object with property "count" remember the times
    // method was called.
    return result;
}