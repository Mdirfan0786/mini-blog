import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const res = await axios.post(
        "https://reqres.in/api/login",

        {
          email,
          password,
        },

        {
          headers: {
            "x-api-key": "free_user_3DwRDgWAn7jH50RW2PDLrK2yApL",
          },
        },
      );

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");

      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p>Test Email: eve.holt@reqres.in</p>

          <p>Test Password: cityslicka</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
