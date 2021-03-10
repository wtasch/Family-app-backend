
const Post = require('../models').Post;
const Event = require('../models').Event;
const Task = require('../models').Task;

const constants = require('../constants');

const getAll = (req, res) => {
    Event.findAll()
    .then(cities => {
        res.status(constants.SUCCESS).json(cities)
        // res.json(cities)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getEventById = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
        Event.findByPk(req.params.event, {
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'body', 'img', 'userId', 'eventId'],
                
            }
        ],
        order: [
            [{model: Post}, 'createdAt', sort]
        ]
    })
    .then(foundEvent => {
        if(foundEvent === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect task Id')
        }else{
            res.status(constants.SUCCESS).json(foundEvent)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAll,
    getEventById
}




