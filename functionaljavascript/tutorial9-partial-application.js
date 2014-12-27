/**
 * Created by xiaoyazi on 12/26/14.
 */
var slice = Array.prototype.slice;

function logger(namespace) {
    return function(){
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
    }
}

module.exports = logger