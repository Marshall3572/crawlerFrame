const mongoose = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = Schema.Types;

const SubSchema = new Schema({
    userId: {type: ObjectId, required: true, index: 1},
    url: {type: String, required: true}
})

const SubModel = mongoose.model('sub', SubSchema);

const insert = async (sub) => {
    const s = await SubModel.create(sub)
    return s
}

const list = async (params) => {
    const match = {}
    const flow = SubModel.find(match)
    const subs = await flow.exec()
    return subs
}

const findByUserId = async (userId) => {
    const subs = await SubModel.find({userId})
    return subs
}

module.exports = {
    insert,
    findByUserId,
    list
}
