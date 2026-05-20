function Dashboard() {
  return (
    <div className="min-h-[80vh] p-4 sm:p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-gray-600 mt-2">Welcome to your MiniBlog dashboard</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <p className="text-gray-500">Total Posts</p>

          <h2 className="text-3xl font-bold mt-3">100</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <p className="text-gray-500">Protected Routes</p>

          <h2 className="text-3xl font-bold mt-3">Active</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <p className="text-gray-500">Created Posts</p>

          <h2 className="text-3xl font-bold mt-3">12</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <p className="text-gray-500">Logged User</p>

          <h2 className="text-3xl font-bold mt-3">Admin</h2>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 border mt-10">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

        <p className="text-gray-600 leading-7">
          This MiniBlog application demonstrates real-world frontend development
          concepts including API integration, authentication, protected routes,
          pagination, reusable components, custom hooks, and responsive UI
          design using React and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
