import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, fetchPost, updatePost, fetchCategories } from '../services/api';

export default function PostForm() {
  const [form, setForm] = useState({ title: '', content: '', category: '' });
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(() => {
    fetchCategories().then(res => setCategories(res.data));
    if (isEdit) {
      fetchPost(id).then(res => setForm({
        title: res.data.title,
        content: res.data.content,
        category: res.data.category?._id || '',
      }));
    }
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) await updatePost(id, form);
    else await createPost(form);
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit' : 'Create'} Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          className="border p-2 w-full"
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          rows="5"
          required
        />
        <select
          className="border p-2 w-full"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <button className="bg-blue-600 text-white p-2 rounded" type="submit">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}
