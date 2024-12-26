
const express = require('express');
const { getAllPosts, editPost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts);
router.put('/:postId', editPost);
router.delete('/:userId/posts/:postId', deletePost);

module.exports = router;
