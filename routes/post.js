const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.post.getAllPosts);
router.post('/:event', ctrl.post.createPost);
router.get('/user', ctrl.post.getPostsByUser);
router.get('/:postId', ctrl.post.getPostById);
router.get('/:event/all', ctrl.post.getPostsByEvent);
router.delete('/:postId', ctrl.post.deletePost);
router.put('/:postId', ctrl.post.editPost);

module.exports = router;


