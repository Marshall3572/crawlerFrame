const express = require('express');

const router = new express.Router();
const UserService = require('../../services/user_service');
const apiRes = require('../../utils/api_response');
const auth = require('../../middlewares/auth');
const SubscriptionService = require('../../services/subscription_service');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    (async () => {
        const users = await UserService.getAllUsers();
        return {
            users,
        };
    })()
        .then((r) => {
            res.data = r;
            apiRes(req, res);
        })
        .catch((e) => {
            next(e);
        });
});

/* ADD New Users. */
router.post('/', (req, res, next) => {
    (async () => {
        const {username, password, name} = req.body;
        const result = await UserService.addNewUser({
            username,
            password,
            name,
        });
        return result;
    })()
        .then((r) => {
            res.data = r;
            apiRes(req, res);
        })
        .catch((e) => {
            next(e);
        });
});

/* GET User By Id. */
router.get('/:userId', (req, res, next) => {
    (async () => {
        const {userId} = req.params;
        const user = await UserService.getUserById(userId);
        return {
            user,
        };
    })()
        .then((r) => {
            res.data = r;
            apiRes(req, res);
        })
        .catch((e) => {
            next(e);
        });
});
router.use(auth());
router.route('/:userId/subscription')
    .post((req, res, next) => {
        (async () => {
            const { userId } = req.params;
            const { subscriptionType, sourceId } = req.body;
            const sub = await SubscriptionService.createSubscription(
                req.user._id,
                subscriptionType,
                sourceId,
            );
            return {
                sub,
            };
        })()
            .then((r) => {
                res.data = r;
                apiRes(req, res);
            })
            .catch((e) => {
                next(e);
            });
    });

/* Add Subscription To New User */
router.get('/:userId/subContent', (req, res, next) => {
    (async () => {
        let { page, pageSize } = req.query;
        page = Number(page) || 0;
        pageSize = Number(pageSize) || 10;

        const contents = await SubscriptionService.getSpiderServiceContents({
            userId: req.user._id,
            page,
            pageSize,
        });
        return {
            contents,
        };
    })()
        .then((r) => {
            res.data = r;
            apiRes(req, res);
        })
        .catch((e) => {
            next(e);
        });
});

module.exports = router;
