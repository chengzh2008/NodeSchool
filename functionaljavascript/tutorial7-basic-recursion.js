function reduce(arr, fn, initial) {
    return  (function reduceHelper(index, value) {
        if (index > arr.length - 1) return value;
        return reduceHelper(index + 1, fn(value, arr[index], index, arr))
    })(0, initial);
}

module.exports = reduce;