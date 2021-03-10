
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.task.getAllTasks);
router.post('/createTask', ctrl.task.createTask);//was event
router.get('/user', ctrl.task.getTasksByUser);
router.get('/:taskId', ctrl.task.getTaskById);
router.get('/:event/all', ctrl.task.getTasksByEvent);
router.delete('/:taskId', ctrl.task.deleteTask);//was :task is name of paramter in url
router.put('/:taskId', ctrl.task.editTask);

module.exports = router;


