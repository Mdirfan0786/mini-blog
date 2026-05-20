function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
