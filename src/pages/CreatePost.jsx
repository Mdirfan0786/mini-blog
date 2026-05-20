import { useState } from "react";

import axiosInstance from "../api/axiosInstance";

import PostForm from "../components/forms/PostForm";

function CreatePost() {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    setSuccess("");

    try {
      const res = await axiosInstance.post("/posts", {
        title,
        body,
      });

      console.log(res.data);

      setSuccess("Post created successfully!");

      setTitle("");
      setBody("");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Create Post</h1>

        <PostForm
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        {success && (
          <p className="text-green-600 text-center mt-5 font-semibold">
            {success}
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
