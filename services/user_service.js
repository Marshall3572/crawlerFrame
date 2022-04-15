const User = require('../models/in_memo/user')
const Subscription = require('../models/in_memo/subscription')

module.exports.getAllUsers = function () {
    return User.list()
}
module.exports.addNewUser = function (firstName, lastName, age) {
    return User.insert(firstName, lastName, age)
}
module.exports.getUserById = function (userId) {
    return User.getOneById(userId)
}
module.exports.createSubscription = function (userId, url) {
    const user = User.getOneById(userId)
    if (!user) throw Error(`This user doesn't exit`)
    return Subscription.insert(userId, url)
}
/*
module.exports.getUserById = function (userId) {
    return Subscription.findByUserId(userId)
}*/
