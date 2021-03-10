const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.event.getAll);
router.get('/:event', ctrl.event.getEventById);

module.exports = router;

