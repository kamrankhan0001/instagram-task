
const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const { getUserPosts, createPost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:userId/posts', getUserPosts);
router.post('/:userId/posts', createPost);

module.exports = router;
