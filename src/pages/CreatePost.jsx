import { useState } from "react";

import axiosInstance from "../api/axiosInstance";

import PostForm from "../components/forms/PostForm";

function CreatePost() {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/posts", {
        title,
        body,
      });

      console.log(res.data);

      alert("Post Created");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Create Post</h1>

      <PostForm
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreatePost;
