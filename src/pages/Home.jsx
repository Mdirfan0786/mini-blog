import { useState } from "react";

import useFetch from "../hooks/useFetch";

import Loader from "../components/common/Loader";

import PostList from "../components/posts/PostList";

import Pagination from "../components/common/Pagination";

function Home() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(`/posts?_page=${page}&_limit=5`);

  console.log(data);

  if (loading) return <Loader />;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">All Posts</h1>

      <PostList posts={data || []} />

      <Pagination setPage={setPage} />
    </div>
  );
}

export default Home;
