const express = require('express');
const { Post, Category } = require('./models');
const { postValidation, categoryValidation } = require('./validate');
const { validationResult } = require('express-validator');

const router = express.Router();

// POST ROUTES
router.get('/api/posts', async (req, res) => {
  const posts = await Post.find().populate('category');
  res.json(posts);
});

router.get('/api/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category');
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

router.post('/api/posts', postValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

router.put('/api/posts/:id', postValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

router.delete('/api/posts/:id', async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json({ message: 'Post deleted' });
});

// CATEGORY ROUTES
router.get('/api/categories', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.post('/api/categories', categoryValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
});

module.exports = router;
