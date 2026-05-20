import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");

    navigate("/login");
  }

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/create">Create</Link>

        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div>
        {token ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
