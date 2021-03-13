const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.event.getAllEvents);
router.post('/createEvent', ctrl.event.createEvent);//was event
router.get('/user', ctrl.event.getEventsByUser);
router.get('/:eventId', ctrl.event.getEventById);
router.get('/:event/all', ctrl.event.getEventsByEvent);
router.delete('/:eventId', ctrl.event.deleteEvent);//was :Event is name of paramter in url
router.put('/:eventId', ctrl.event.editEvent);

module.exports = router;

