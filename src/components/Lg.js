import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Login.css"

const Lg = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate("/slideshow"); // Redirect to the main content
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-field">
            <input type="text" required />
            <label>Enter your email</label>
          </div>
          <div className="input-field">
            <input type="password" required />
            <label>Enter your password</label>
          </div>
          <div className="forget">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Log In</button>
          <div className="register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Lg;
