const Post = require('../models').Post;
const Event = require('../models').Event;
const User = require('../models').User;
const Part = require('../models').Part;


const constants = require('../constants');

const getAllParts = (req, res) => {
    Part.findAll({
        attributes: ['id', 'eventId', 'desc', 'firstName', 'lastName', 'image', 'completed'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allParts => {
        res.status(constants.SUCCESS).json(allParts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPartById = (req, res) => {
    Part.findByPk(req.params.eventId)
    .then(foundPart => {
        if(foundPart === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Part  Id')
        }else{
            res.status(constants.SUCCESS).json(foundPart)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createPart = (req, res) => {
    console.log("creating Part")
    console.log(req.body)
    // req.body.userId = req.user.id;
    req.body.eventId = req.params.part;
    // req.body.eventId = req.params.event;

    Part.create(req.body)
    .then(newPart => {
        res.status(constants.SUCCESS).json(newPart)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPartsByPart = (req, res) => {
    Part.findAll({
        where: {
            eventId: req.params.part
        },
        attributes: ['id', 'title', 'body', 'img']
    })
    .then(allParts => {
        if(allParts.length > 0){
            res.status(constants.SUCCESS).json(allParts);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect part Id`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPartsByUser = (req, res) => {
    Part.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['desc'],
        include: [{
            model: Part
        }]
    })
    .then(allParts => {
        res.status(constants.SUCCESS).json(allParts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editPart = (req, res) => {
    Part.update(req.body, {
        where: {
            id: req.params.eventId
        },
        returning: true
    })
    .then(updatedPart => {
        if(updatedPart[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Part Id')
        }else{
            Part.findByPk(req.params.eventId, {
                include: [
                    {
                        model: Part,
                        attributes: ['name', 'workOn', 'img', 'location']
                    },
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            })
            .then(foundPart => {
                if(foundPart === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Part Id')
                }else{
                    res.status(constants.SUCCESS).json(foundPart)
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

const deletePart = (req, res) => {
    Part.findByPk(req.params.eventId)
    .then(foundPart => {
        // if(foundPart.eventId === req.user.id){
            Part.destroy({
                where: {id: req.params.eventId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        // } else {
        //     res.status(constants.FORBIDDEN).send('ERROR: Part not created by User')
        // }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createPart,
    getPartsByPart,
    getPartsByUser,
    getAllParts,
    deletePart,
    editPart,
    getPartById
}


