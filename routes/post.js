const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.getAllPosts);
router.post('/createPost', ctrl.post.createPost);//was c
router.get('/user', ctrl.post.getPostsByUser);
router.get('/:postId', ctrl.post.getPostById);
router.get('/:event/all', ctrl.post.getPostsByEvent);
router.delete('/:eventId', ctrl.post.deletePost);
router.put('/:eventId', ctrl.post.editPost);

module.exports = router;


