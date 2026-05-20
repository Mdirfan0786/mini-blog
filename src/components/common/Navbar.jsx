import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-5">
      <Link to="/">Home</Link>

      <Link to="/create">Create</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
