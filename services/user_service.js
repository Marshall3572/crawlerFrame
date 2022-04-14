const User = require('../models/in_memo/user')
module.exports.getAllUsers = function () {
    return User.list()
}
module.exports.addNewUser = function (firstName, lastName, age) {
    return User.insert(firstName, lastName, age)
}
