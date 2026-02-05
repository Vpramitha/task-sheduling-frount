import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p>Please login to your account</p>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

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
