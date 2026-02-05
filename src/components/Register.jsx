import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>
        <p>Join us and get started</p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

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
