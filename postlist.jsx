import { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(p => p._id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
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
