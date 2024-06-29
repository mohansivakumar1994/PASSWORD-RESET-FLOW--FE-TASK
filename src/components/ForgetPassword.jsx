import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    Axios.post('https://forget-password-be-ymlx.onrender.com/auth/forgot-password', { email })
      .then(response => {
        if (response.data.status) { 
          // Notify user about the password reset email
          alert("Check your email for the password reset link.");
          // Redirect to login page
          navigate('/login');
        }
      })
      .catch(error => {
        console.error("Error occurred while sending password reset request:", error);
        // Notify user about the error
        alert("Failed to send password reset email. Please try again later.");
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="card text-center" style={{ width: '300px' }}>
        <div className="card-header h5 text-white bg-primary">Password Reset</div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-outline">
              <input
                type="email"
                id="typeEmail"
                className="form-control my-3"
                value={email}
                onChange={handleEmailChange}
              />
              <label className="form-label" htmlFor="typeEmail">Email input</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Reset password</button>
          </form>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
