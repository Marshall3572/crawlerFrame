const User = require('../models/in_memo/user')
module.exports.getAllUsers = function () {
    return User.list()
}
