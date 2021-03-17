const Post = require('../models').Post;
const Event = require('../models').Event;
const User = require('../models').User;
const Task = require('../models').Task;

const constants = require('../constants');

const getAllTasks = (req, res) => {
    Task.findAll({
        attributes: ['id', 'eventId', 'desc', 'firstName', 'lastName', 'image', 'completed'],
        // include: [
        //     {
        //         model: Event
        //     }
        // ]
    })
    .then(allTasks => {
        res.status(constants.SUCCESS).json(allTasks)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getTaskById = (req, res) => {
    Task.findByPk(req.params.eventId)
    .then(foundTask => {
        if(foundTask === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect task  Id')
        }else{
            res.status(constants.SUCCESS).json(foundTask)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createTask = (req, res) => {
    console.log("creating task")
    console.log(req.body)
    // req.body.userId = req.user.id;
    // req.body.eventId = req.params.event;
    // req.body.eventId = req.params.event;

    Task.create(req.body)
    .then(newTask => {
        res.status(constants.SUCCESS).json(newTask)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getTasksByEvent = (req, res) => {
    Task.findAll({
        where: {
            eventId: req.params.event
        },
        attributes: ['id', 'title', 'body', 'img']
    })
    .then(allTasks => {
        if(allTasks.length > 0){
            res.status(constants.SUCCESS).json(allTasks);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect event Id`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getTasksByUser = (req, res) => {
    Task.findAll({
        where: {
            userId: req.user.id
        },
        attributes: ['desc'],
        include: [{
            model: Event
        }]
    })
    .then(allTasks => {
        res.status(constants.SUCCESS).json(allTasks)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editTask = (req, res) => {
    console.log("THIS IS A TEST ")
    Task.update(req.body, {
        where: {
            id: req.params.taskId
        },
        returning: true
    })
    .then(updatedTask => {
        console.log("THIS IS A TEST UPDATE TASK ")
       
        
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteTask = (req, res) => {
    Task.findByPk(req.params.eventId)
    .then(foundTask => {
        // if(foundTask.eventId === req.user.id){
            Task.destroy({
                where: {id: req.params.taskId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        // } else {
        //     res.status(constants.FORBIDDEN).send('ERROR: Task not created by User')
        // }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createTask,
    getTasksByEvent,
    getTasksByUser,
    getAllTasks,
    deleteTask,
    editTask,
    getTaskById
}



