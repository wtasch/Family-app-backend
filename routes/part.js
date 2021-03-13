const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.part.getAllParts);
router.post('/createPart', ctrl.part.createPart);//was Part
router.get('/user', ctrl.part.getPartsByUser);
router.get('/:eventId', ctrl.part.getPartById);
router.get('/:event/all', ctrl.part.getPartsByPart);
router.delete('/:eventId', ctrl.part.deletePart);//was :Part is name of paramter in url
router.put('/:eventId', ctrl.part.editPart);

module.exports = router;

