function countWords(inputWords) {
    return inputWords.reduce(function(result, item){
       if (result[item]) result[item]++;
        else result[item] = 1;
        return result;
    }, {});
}

module.exports = countWords

