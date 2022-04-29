const Production = {
    logger: {
        path: '/var/logs/what_i_love/',
    },
    mongo: {
        uri: 'mongodb://127.0.0.1:27018/what_i_love'
    },
    elasticsearch: {
        host: 'localhost:9200',
    }
    /*    redis: {
            port: 6379,
            host: 'localhost'
        }*/
}
const Debug = {
    logger: {
        path: './logs/',
    },
    mongo: {
        uri: 'mongodb://127.0.0.1:27018/what_i_love'
    },
    elasticsearch: {
        host: 'localhost:9200',
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports = Production
} else {
    module.exports = Debug
}
