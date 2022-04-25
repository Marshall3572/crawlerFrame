const loggerSettings = require('../../settings').logger
const winston = require('winston')
require('winston-daily-rotate-file')

const {Logger, transports} = winston
const { DailyRotateFile, Console } = transports;

const logger= new Logger({
    transports:[
        new DailyRotateFile({
            name: 'base_logger',
            filename: `${loggerSettings.path}info.log.`,
            prepend: false,
            datePattern: 'yyyy-MM-dd',
            level: 'info'
        }),
        new DailyRotateFile({
            name: 'error_logger',
            filename: `${loggerSettings.path}/error.log.`,
            prepend: false,
            datePattern: 'yyyy-MM-dd',
            level: 'error'
        }),
    ]
})
if (process.env.NODE_ENV !== 'production') {
    logger.add(Console, {
        format: (info) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`,
    });
}
module.exports = logger
