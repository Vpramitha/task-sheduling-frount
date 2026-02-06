import "./Auth.css";
import { useState } from "react";
import API from "../api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", { email, password });
      if (response.status !== 200) {
        throw new Error("Login failed! Please check your credentials.");
      }
      const { token } = response.data;

      // Save token for future API calls
      localStorage.setItem("jwtToken", token);

      alert("Login successful!");
      // Redirect user to dashboard or home page
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed!");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span className="auth-footer">
          Don’t have an account? <a href="/register">Register</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
