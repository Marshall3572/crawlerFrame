var express = require('express');
var router = express.Router();
// const User = require('../models/in_memo/user')
const UserService = require('../services/user_service')

/* GET users listing. */
router.get('/', (req, res) => {
    const users = UserService.getAllUsers()
    res.locals.users = users || []
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
    res.render('user')
})

/* ADD New Users. */
router.post('/', (req, res) => {
    const {firstName, lastName, age} = req.body
    const u = UserService.addNewUser(firstName, lastName, age)
    res.json(u)
})


module.exports = router;
