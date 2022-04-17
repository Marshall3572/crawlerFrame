var express = require('express');
var router = express.Router();
// const User = require('../models/in_memo/user')
const UserService = require('../services/user_service')

/* GET users listing. */
router.get('/', (req, res) => {
    (async () => {
        const users = await UserService.getAllUsers()
        res.locals.users = users || []
        res.render('users')
    })()
        .then(r => {
            console.log(r);
        })
        .catch(e => {
            console.log(e);
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
    const user = UserService.getUserById(Number(req.params.userId))
    res.locals.user = user || {}
    res.render('user')
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
