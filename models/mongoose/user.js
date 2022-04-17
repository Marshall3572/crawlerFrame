const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name: {type: String, required: true, index: 1},
    age: {type: Number, min: 0, max: 120},
})

const UserModel = mongoose.model('user', UserSchema);

const insert = async (user) => {
    const u = await UserModel.create(user)
    return u
}

const getOneById = async (id) => {
    const user = await UserModel.findOne({_id: id})
    return user
}

const getOneByName = async (name) => {
    const user = await UserModel.findOne({name})
    return user
}

const list = async (params) => {
    const match = {}
    const flow = UserModel.find(match)
    const users = await flow.exec()
    return users
}

module.exports = {
    insert,
    getOneByName,
    getOneById,
    list
}
