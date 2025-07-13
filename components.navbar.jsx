import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">MERN Blog</h1>
      <div className="space-x-4">
        <Link to="/">Posts</Link>
        <Link to="/create">Create Post</Link>
      </div>
    </nav>
  );
}
