
const Post = require('../models/post');
const User = require('../models/user');

// Get all posts of a user
exports.getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a post for a user
exports.createPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, description, images } = req.body;

    const post = await Post.create({ title, description, userId, images });
    await User.findByIdAndUpdate(userId, { $inc: { postCount: 1 } });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a post
exports.editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const updates = req.body;

    const post = await Post.findByIdAndUpdate(postId, updates, { new: true });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const { postId, userId } = req.params;

    await Post.findByIdAndDelete(postId);
    await User.findByIdAndUpdate(userId, { $inc: { postCount: -1 } });

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'name');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
