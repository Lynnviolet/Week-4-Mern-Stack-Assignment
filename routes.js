const { User } = require('./models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('./auth');

// REGISTER
router.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'Registered' });
  } catch (err) {
    res.status(400).json({ message: 'Email already exists' });
  }
});

// LOGIN
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

// PROTECT POST CREATION
router.post('/api/posts', authMiddleware, postValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

// PROTECT POST EDIT/DELETE as well (same way)
