const router = require('express').Router();
const {user} = require('../../controllers');
const {user: userMiddleware} = require('../../middleware');

const {userService} = require('../../service');

router.post('/signup',user.createUser);

router.post('/login',userMiddleware.checkUserLoginMiddleware,user.loginUser );

router.get('/findAllUser/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById);

router.get('/findAllUser', user.findAllUser);

router.delete('/:user_id',user.deleteUser);

router.patch('/addFriend/:user_id',user.addFriend);

router.patch('/cancelRequest/:user_id',user.cancelRequest);

module.exports = router;
