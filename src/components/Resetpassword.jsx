import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [resetCode, setResetCode] = useState('');
  const [password, setPassword] = useState(''); // Add password state
  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetCodeChange = (event) => {
    setResetCode(event.target.value);
  };

  const handlePasswordChange = (event) => { // Handler for password change
    setPassword(event.target.value);
  };

  const handleResetPassword = (event) => {
    event.preventDefault();

    Axios.post('https://forget-password-be-ymlx.onrender.com/auth/reset-password/' + token, { password }) // Use password state
      .then(response => {
        if (response.data.status) {
          alert("Password reset successfully. You can now login with your new password.");
          navigate('/login');
        }
      })
      .catch(error => {
        console.error("Error occurred while resetting password:", error);
        alert("Failed to reset password. Please try again later.");
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="card text-center" style={{ width: '300px' }}>
        <div className="card-header h5 text-white bg-primary">Reset Password</div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your new Password.
          </p>
          <form onSubmit={handleResetPassword}>
            <div className="form-outline">
              <input
                type="password" // Change type to password for password input
                id="resetCode"
                className="form-control my-3"
                value={password} // Use password state
                onChange={handlePasswordChange} // Use handlePasswordChange function
                placeholder="New Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Reset password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
