const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.shop.getAllShops);
router.post('/createShop', ctrl.shop.createShop);//was Shop
router.get('/user', ctrl.shop.getShopsByUser);
router.get('/:eventId', ctrl.shop.getShopById);
router.get('/:shop/all', ctrl.shop.getShopsByShop);
router.delete('/:eventId', ctrl.shop.deleteShop);//was :Event is name of paramter in url
router.put('/:eventId', ctrl.shop.editShop);

module.exports = router;

