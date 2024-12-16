// ForgetPassword.js
import React, { useState } from 'react';
import '../style/ForgetPassword.css';

const ForgetPassword = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset email sent to:', email);
  };

  if (!isVisible) return null;

  return (
    <div className="forget-password-overlay">
      <div className="forget-password-modal">
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" onClick={onClose}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;