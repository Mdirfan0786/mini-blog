import PostCard from "./PostCard";

function PostList({ posts }) {
  if (!Array.isArray(posts)) {
    return <h1 className="text-red-500">Posts data is invalid</h1>;
  }

  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
