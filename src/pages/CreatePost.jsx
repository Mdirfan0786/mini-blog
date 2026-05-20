function PostForm({ title, body, setTitle, setBody, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-5 w-full"
    >
      <input
        type="text"
        placeholder="Enter post title"
        className="w-full max-w-md border border-gray-300 p-4 rounded-lg outline-none focus:ring-2 focus:ring-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="6"
        placeholder="Enter post content"
        className="w-full max-w-md border border-gray-300 p-4 rounded-lg outline-none resize-none focus:ring-2 focus:ring-black"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="w-full max-w-md bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
