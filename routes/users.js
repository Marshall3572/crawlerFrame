var express = require('express');
var router = express.Router();

const users = []
/* GET users listing. */
router.route('/')
    .get(function (req, res, next) {
        res.json(users)
    })
    .post((req, res) => {
        const user = req.body
        users.push(user)
        res.json(user)
    })

module.exports = router;
