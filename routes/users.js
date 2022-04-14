var express = require('express');
var router = express.Router();
const User = require('../models/in_memo/user')
const UserService = require('../services/user_service')

/* GET users listing. */
router.get('/', (req, res) => {
    const u = new User(req.query.firstName, req.query.lastName, req.query.age)
    res.locals.user = u
    res.render('user')
})
module.exports = router;
