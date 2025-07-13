import { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetchPosts();
        setPosts(res.data || res); // Some APIs return { data: [...] }, others just [...]
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    const previousPosts = [...posts];
    setPosts(posts.filter(p => p._id !== id));

    try {
      await deletePost(id);
    } catch (err) {
      setError('Failed to delete post');
      setPosts(previousPosts);
    }
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(post => (
        <div key={post._id} className="border p-4 mb-2 rounded shadow">
          <h3 className="text-xl">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.category?.name}</p>
          <p>{post.content.slice(0, 100)}...</p>
          <div className="space-x-2 mt-2">
            <Link to={`/posts/${post._id}`} className="text-blue-500">View</Link>
            <Link to={`/edit/${post._id}`} className="text-green-500">Edit</Link>
            <button onClick={() => handleDelete(post._id)} className="text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
