import React from 'react';
import '../style/RegisterPage.css'; 
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="rg-container">
            <div className="register-container">
                <div className="left">
                    <img 
                        alt="Ambulance" 
                        height="400" 
                        src="https://storage.googleapis.com/a1aa/image/SEWBfs9xPF1DfEwin1P2h0YDRAz37wbaOgD4kE8cA4xkEvIUA.jpg" 
                        width="400" 
                    />
                </div>
                <div className="right">
                    <h2>REGISTER</h2>
                    <form>
                        <input placeholder="Full Name" type="text" required />
                        <input placeholder="Email" type="email" required />
                        <input placeholder="Phone Number" type="text" required />
                        <input placeholder="Address" type="text" required />
                        <input placeholder="Password" type="password" required />
                        <input placeholder="Confirm Password" type="password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="login">
                        Already have an account? <Link to="/login"> <a>Login</a> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
