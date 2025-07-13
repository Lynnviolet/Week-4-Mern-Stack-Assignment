import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../services/api';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(id).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{post.category?.name}</p>
      <p>{post.content}</p>
    </div>
  );
}
