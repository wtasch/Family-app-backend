const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/User', ctrl.user.getProfile);
router.get('/profile', ctrl.user.getProfile);
router.put('/profile', ctrl.user.editProfile);
// router.get('/User', ctrl.user.login);


module.exports = router;


