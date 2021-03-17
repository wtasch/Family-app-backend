



const User = require('../models').User;
const Event = require('../models').Event;
const Post = require('../models').Post;
const Task = require('../models').Task;
const Signup = require('../models').Signup;

const constants = require('../constants');
const getAllSignups = (req, res) => {
    Signup.findAll({
        attributes: ['id', 'username', 'password', 'name', 'email', 'img', 'isActive'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allSignups => {
        res.status(constants.SUCCESS).json(allTasks)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const getProfile = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    User.findByPk(req.user.id, {
        // include: [
        //     {
        //         model: Event,
        //         attributes: ['id', 'name', 'workOn', 'img', 'location']
        //     },
        //     {
        //         model: Post,
        //         attributes: ['id', 'title', 'img']
        //     }
        // ],
        attributes: ['id', 'name', 'username', 'img', 'createdAt', 'email'],
        order: [
            [{model: Post}, 'createdAt', sort]
        ]
    })
    .then(userProfile => {
        res.status(constants.SUCCESS).json(userProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.user.id, {
            // include: [
            //     {
            //         model: Event,
            //         attributes: ['id', 'name', 'workOn', 'img', 'location']
            //     }
            // ],
            attributes: ['id', 'name', 'username', 'img', 'createdAt', 'email']
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getProfile,
    editProfile,
    getAllSignups
}
