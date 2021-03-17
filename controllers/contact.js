const Post = require('../models').Post;
const Event = require('../models').Event;
const Contact = require('../models').Contact;


const constants = require('../constants');

const getAllEvents = (req, res) => {
    // console.log("i got to controller")
    Event.findAll({
        attributes: ['id', 'name', 'img', 'workOn', 'location', 'eventId'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allEvents => {
        res.status(constants.SUCCESS).json(allEvents)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getEventById = (req, res) => {
    Event.findByPk(req.params.eventId)
    .then(foundEvent => {
        if(foundEvent === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Event  Id')
        }else{
            res.status(constants.SUCCESS).json(foundEvent)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createEvent = (req, res) => {
    console.log("creating Event")
    console.log(req.body)
    // req.body.userId = req.user.id;
    req.body.eventId = req.params.event;
    // req.body.eventId = req.params.event;

    Event.create(req.body)
    .then(newEvent => {
        res.status(constants.SUCCESS).json(newEvent)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getEventsByEvent = (req, res) => {
    Event.findAll({
        where: {
            eventId: req.params.event
        },
        attributes: ['id', 'name', 'img', 'workOn', 'location', 'eventId'],
    })
    .then(allEvents => {
        if(allEvents.length > 0){
            res.status(constants.SUCCESS).json(allEvents);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect event Id`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getEventsByUser = (req, res) => {
    Event.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['desc'],
        include: [{
            model: Event
        }]
    })
    .then(allEvents => {
        res.status(constants.SUCCESS).json(allEvents)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editEvent = (req, res) => {
    Event.update(req.body, {
        where: {
            id: req.params.eventId
        },
        returning: true
    })
    .then(updatedEvent => {
        if(updatedEvent[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Event Id')
        }else{
            Event.findByPk(req.params.eventId, {
                // include: [
                //     {
                //         model: Event,
                //         attributes: ['name', 'workOn', 'img', 'location', 'eventId']
                //     },
                //     {
                //         model: User,
                //         attributes: ['id', 'username']
                //     }
                // ]
            })
            .then(foundEvent => {
                if(foundEvent === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Event Id')
                }else{
                    res.status(constants.SUCCESS).json(foundEvent)
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

const deleteEvent = (req, res) => {
    Event.findByPk(req.params.eventId)
    .then(foundEvent => {
        // if(foundEvent.eventId === req.user.id){
            Event.destroy({
                where: {id: req.params.eventId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        // } else {
        //     res.status(constants.FORBIDDEN).send('ERROR: Event not created by User')
        // }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createEvent,
    getEventsByEvent,
    getEventsByUser,
    getAllEvents,
    deleteEvent,
    editEvent,
    getEventById
}

