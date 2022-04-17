const mongoose = require('mongoose')
mongoose.Promise = Promise

const uri = 'mongodb://127.0.0.1:27018/what_i_love'
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection

db.on('open', () => {
    console.log('db connected!')
})

db.on('error', (e) => {
    console.log(e)
})

module.exports = db
