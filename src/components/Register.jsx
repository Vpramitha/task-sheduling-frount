import "./Auth.css";
import { useState } from "react";
import API from "../api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("auth/register", { name, email, password });
      if (response.status !== 201) {
        throw new Error("Registration failed! Please try again.");
      }
      alert("Registration successful! You can login now.");
      window.location.href = "/"; // redirect to login
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>
        <p>Join us and get started</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Register</button>
        </form>

        <span className="auth-footer">
          Already have an account? <a href="/">Login</a>
        </span>
      </div>
    </div>
  );
};

export default Register;
