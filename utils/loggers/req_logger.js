const loggerSettings = require('../../settings').logger
const winston = require('winston')
require('winston-daily-rotate-file')

const {Logger, transports} = winston
const {DailyRotateFile} = transports

const logger = new Logger({
    transports: [
        new DailyRotateFile({
            name: 'base_logger',
            filename: `${loggerSettings}req.log.`,
            prepend: false,
            datePattern: 'yyyy-MM-dd',
            level: 'info',
        }),
    ],
})

module.exports = logger;
