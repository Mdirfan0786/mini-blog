function Pagination({ page, setPage }) {
  return (
    <div className="flex items-center gap-4 mt-6">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`px-4 py-2 rounded text-white
          
          ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-black"}
        `}
      >
        Prev
      </button>

      <div className="text-xl font-bold">Page {page}</div>

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
