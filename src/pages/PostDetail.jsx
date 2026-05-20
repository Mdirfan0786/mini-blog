import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";

import Loader from "../components/common/Loader";

function PostDetail() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/posts/${id}`);

  if (loading) return <Loader />;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      <p>{data.body}</p>
    </div>
  );
}

export default PostDetail;
