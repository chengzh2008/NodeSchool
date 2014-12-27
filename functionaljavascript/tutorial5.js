function checkUserValid(goodUsers) {
    function isIn(element, index, array) {
        return goodUsers.some(function(goodUser){
            return goodUser.id === element.id;
        })

    }
    return function(submittedUsers) {
        return submittedUsers.every(isIn);
    };
}
module.exports = checkUserValid;