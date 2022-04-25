const mongoose = require('mongoose')
const logger = require('../utils/loggers/logger')
const mongoSetting = require('../settings').mongo

mongoose.Promise = Promise

// todo
const {uri} = mongoSetting
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const db = mongoose.connection
// mongoose.connect(uri, { useMongoClient: true });
// const db = mongoose.connection;

db.on('open', () => {
    logger.info(`successfully connecting to db, uri: ${uri}`);
})

db.on('error', (e) => {
    logger.error(`error connecting to db, uri: ${uri}`, { err: e });
})

module.exports = db
