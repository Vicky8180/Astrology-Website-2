import React, { useState } from 'react';
import "./Profile.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar.jsx";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Logic to update password
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
      // You can add logic here to send the new password to the server for updating
      // Reset form fields and error state
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setError('');
    }
  };

  return (

    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />


    <div className="update-password-container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="update-btn">Update Password</button>
      </form>
    </div>
    </div>
    </div>

  );
};

export default UpdatePassword;
