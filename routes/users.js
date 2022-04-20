var express = require('express');
var router = express.Router();
// const User = require('../models/in_memo/user')
const UserService = require('../services/user_service')
const HTTPReqParamError = require('../errors/http_errors/http_request_param_error')
/* GET users listing. */
router.get('/', (req, res, next) => {
    (async () => {
        throw new HTTPReqParamError('page', '请指定页码', 'page can not be empty')
        const users = await UserService.getAllUsers()
        res.locals.users = users || []
    })()
        .then(() => {
            res.render('users')
        })
        .catch(e => {
            next(e)
        })
    /*    res.locals.users = [{
            "firstName": "marshall",
            "lastName": "mathers"
        },{
            "firstName": "liushihao",
            "lastName": "mathers"
        },{
            "firstName": "little bear",
            "lastName": "mathers"
        }]*/
})

/* ADD New Users. */
router.post('/', (req, res) => {
    const {firstName, lastName, age} = req.body
    const u = UserService.addNewUser(firstName, lastName, age)
    res.json(u)
})

/* GET User By Id. */
router.get('/:userId', (req, res) => {
    (async () => {
        const {userId} = req.params
        if (userId.length < 5) {
            throw new HTTPReqParamError('userId', '用户ID不能为空', 'userID isn`t supposed to be empty')
        }
        const user = await UserService.getUserById(userId)
        res.locals.user = user || {}
        res.render('user')
    })()
        .catch(e => {
            console.log(e);
            res.json(e)
        })
})

/* Add Subscription To New User */
router.post('/:userId/subscription', (req, res, next) => {
    try {
        const sub = UserService.createSubscription(Number(req.params.userId), req.body.url)
        res.json(sub)
    } catch (e) {
        next(e)
    }
})


module.exports = router;
