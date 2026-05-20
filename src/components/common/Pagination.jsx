function Pagination({ page, setPage }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Prev
      </button>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
