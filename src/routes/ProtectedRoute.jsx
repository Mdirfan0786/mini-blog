function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Access Denied</h1>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
