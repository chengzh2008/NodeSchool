module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(prev, item) {
        return prev.concat(fn(item));
    }, [])
}