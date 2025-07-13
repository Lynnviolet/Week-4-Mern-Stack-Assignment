const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: String
}, { timestamps: true });

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Post = mongoose.model('Post', PostSchema);
const Category = mongoose.model('Category', CategorySchema);

module.exports = { Post, Category };
