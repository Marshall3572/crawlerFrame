const mongoose = require('mongoose')
const logger = require('../utils/loggers/logger')

mongoose.Promise = Promise

// todo
const uri = 'mongodb://127.0.0.1:27018/what_i_love'
/*mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection*/
mongoose.connect(uri, { useMongoClient: true });
const db = mongoose.connection;

db.on('open', () => {
    logger.info(`successfully connecting to db, uri: ${uri}`);
})

db.on('error', (e) => {
    logger.error(`error connecting to db, uri: ${uri}`, { err: e });
})

module.exports = db
