const express = require('express');
const router = express.Router();
// const User = require('../models/in_memo/user')
const UserService = require('../../services/user_service')
const apiRes = require('../../utils/api_response')
const auth = require('../../middlewares/auth')

const HTTPReqParamError = require('../../errors/http_errors/http_request_param_error')

/* GET users listing. */
router.get('/', async (req, res, next) => {
    (async () => {
        // throw new HTTPReqParamError('page', '请指定页码', 'page can not be empty')
        const users = await UserService.getAllUsers();
        return {
            users,
        };
    })()
        .then((r) => {
            res.data = r;
            apiRes(req, res);
        })
        .catch(e => {
            next(e)
        })
})

/* ADD New Users. */
router.post('/', (req, res, next) => {
    (async () => {
        const {username, password, name} = req.body
        const result = await UserService.addNewUser(username, password, name)
        return result
    })()
        .then(r => {
            res.data = r
            apiRes(req, res)
        })
        .catch(e => {
            next(e)
        })
})

/* GET User By Id. */
router.get('/:userId', (req, res, next) => {
    (async () => {
        const {userId} = req.params
        const user = await UserService.getUserById(userId)
        return {
            user,
        }
    })()
        .then(r => {
            res.data = r
            apiRes(req, res)
        })
        .catch(e => {
            next(e)
        })
})

/* Add Subscription To New User */
router.post('/:userId/subscription', auth(), (req, res, next) => {
    (async () => {
        const {userId} = req.params
        const sub = await UserService.createSubscription(userId, req.body.url)
        return {
            sub,
        }
    })()
        .then(r => {
            res.data = r
            apiRes(req, res)
        })
        .catch(e => {
            next(e)
        })
})

module.exports = router;
