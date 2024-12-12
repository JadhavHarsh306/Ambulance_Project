import React from 'react';
import '../style/Register.css'

const Register = ({isActive,notActive}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simply log the form data (you can replace it with actual form submission logic)
    console.log('Form submitted successfully');
  };
  if(!isActive){
    return null;
  }

  return (
    <div className='popup-overlay'>
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="input-group">
          <label>Phone Number:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Pin Code:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Adhar Card Number:</label>
          <input type="text" />
        </div>
        <button type="submit" onClick={notActive}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
