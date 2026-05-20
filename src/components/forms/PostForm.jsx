function PostForm({ title, body, setTitle, setBody, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <input
        type="text"
        placeholder="Title"
        className="border p-3 w-full rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="5"
        placeholder="Body"
        className="border p-3 w-full rounded"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="bg-black text-white px-5 py-2 rounded">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
