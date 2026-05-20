import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="border p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-3">{post.title}</h2>

      <p className="mb-4">{post.body}</p>

      <Link to={`/posts/${post.id}`} className="text-blue-500">
        Read More
      </Link>
    </div>
  );
}

export default PostCard;
