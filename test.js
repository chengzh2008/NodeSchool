function getDependencies(tree, result) {
    result = result || [];
    var dependencies = tree.dependencies || [];
    Object.keys(dependencies).forEach(function(dep){
        var key = dep +"@" + tree.dependencies[dep].version;
        if (result.indexOf(key) === -1) {
            result.push(key);
            getDependencies(tree.dependencies[dep], result);
        }
    });
    return result.sort();
}

var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

console.log(getDependencies(loremIpsum, []));