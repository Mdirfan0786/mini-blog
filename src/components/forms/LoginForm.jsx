function LoginForm({ email, password, setEmail, setPassword, handleLogin }) {
  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-black text-white px-5 py-2 rounded">Login</button>
    </form>
  );
}

export default LoginForm;
