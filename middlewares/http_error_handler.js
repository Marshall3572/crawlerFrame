const HTTPBaseError = require('../errors/http_base_error')

function handler(options) {
    return function (err, req, res, next) {
        if (err instanceof HTTPBaseError) {
            // console.log(`${err.httpStatusCode} ${err.message} ${err.errCode}`, err);
            console.log(err);
            res.statusCode = err.httpStatusCode
            res.json({
                code: err.errCode,
                msg: err.httpMsg,
            })
        } else {
            next(err)
        }
    }
}

module.exports = handler
