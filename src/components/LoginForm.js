import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., check email/password)

    const email = e.target[0].value; // Input field value
    const password = e.target[1].value;

    if (email === "mahesh@gmail.com" && password === "123") {
      alert("Login successful!");
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Welcome back</span>
        </div>
        <p className="title_para">Please enter your details to sign in.</p>

        <form onSubmit={handleLogin}>
          <div className="row">
            <input type="text" placeholder="Enter your email..." required />
          </div>
          <div className="row">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member?{" "}
            <a href="#" onClick={() => navigate("/signup")}>
              Signup now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
