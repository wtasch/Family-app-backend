const Post = require('../models').Post;
const Event = require('../models').Event;
const User = require('../models').User;
const Shop = require('../models').Shop;

const constants = require('../constants');

const getAllShops = (req, res) => {
    Shop.findAll({
        attributes: ['id', 'eventId', 'desc', 'firstName', 'lastName', 'image', 'completed'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allShops => {
        res.status(constants.SUCCESS).json(allShops)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getShopById = (req, res) => {
    Shop.findByPk(req.params.eventId)
    .then(foundShop => {
        if(foundShop === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Shop  Id')
        }else{
            res.status(constants.SUCCESS).json(foundShop)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createShop = (req, res) => {
    console.log("creating Shop")
    console.log(req.body)
    // req.body.userId = req.user.id;
    req.body.eventId = req.params.shop;
    // req.body.eventId = req.params.shop;

    Shop.create(req.body)
    .then(newShop => {
        res.status(constants.SUCCESS).json(newShop)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getShopsByShop = (req, res) => {
    Shop.findAll({
        where: {
            eventId: req.params.shop
        },
        attributes: ['id', 'title', 'body', 'img']
    })
    .then(allShops => {
        if(allShops.length > 0){
            res.status(constants.SUCCESS).json(allShops);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect event Id`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getShopsByUser = (req, res) => {
    Shop.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['desc'],
        include: [{
            model: Shop
        }]
    })
    .then(allShops => {
        res.status(constants.SUCCESS).json(allShops)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editShop = (req, res) => {
    Shop.update(req.body, {
        where: {
            id: req.params.eventId
        },
        returning: true
    })
    .then(updatedShop => {
        if(updatedShop[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Shop Id')
        }else{
            Shop.findByPk(req.params.eventId, {
                include: [
                    {
                        model: Shop,
                        attributes: ['name', 'workOn', 'img', 'location']
                    },
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            })
            .then(foundShop => {
                if(foundShop === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Shop Id')
                }else{
                    res.status(constants.SUCCESS).json(foundShop)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteShop = (req, res) => {
    Shop.findByPk(req.params.eventId)
    .then(foundShop => {
        // if(foundShop.eventId === req.user.id){
            Shop.destroy({
                where: {id: req.params.eventId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        // } else {
        //     res.status(constants.FORBIDDEN).send('ERROR: Shop not created by User')
        // }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createShop,
    getShopsByShop,
    getShopsByUser,
    getAllShops,
    deleteShop,
    editShop,
    getShopById
}


