import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      // If no token, redirect to login
      window.location.href = "/login";
      return;
    }

    // Decode token (optional: to get user info)
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // JWT payload is base64
      setUserEmail(payload.email);
    } catch (error) {
      console.error("Invalid token");
      window.location.href = "/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome to Dashboard!</h1>
      <p>User Email: <strong>{userEmail}</strong></p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
