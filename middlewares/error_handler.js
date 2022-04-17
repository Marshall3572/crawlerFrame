function handler(options) {
    return function (err, req, res, next) {
        console.log('uncaught error in the middleware process', err);
    }
}

module.exports = handler
