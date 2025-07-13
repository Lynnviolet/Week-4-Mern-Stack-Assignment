router.post('/api/posts', upload.single('image'), postValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    image: req.file ? req.file.filename : null,
  });

  await newPost.save();
  res.status(201).json(newPost);
});
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const fetchCategories = () => API.get('/categories');
