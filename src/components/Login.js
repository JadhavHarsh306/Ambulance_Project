import React from 'react';
import '../style/Login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="lg-container">
            <div className="login-container">
                <div className="left">
                    <img 
                        alt="Ambulance" 
                        height="400" 
                        src="https://storage.googleapis.com/a1aa/image/SEWBfs9xPF1DfEwin1P2h0YDRAz37wbaOgD4kE8cA4xkEvIUA.jpg" 
                        width="400" 
                    />
                </div>
                <div className="right">
                    <h2>LOGIN</h2>
                    <form>
                        <input placeholder="Email" type="email" />
                        <input placeholder="Password" type="password" />
                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                        <Link to="/ride"><button type="submit">Log In</button></Link>
                    </form>
                    <div className="signup">
                        Don't have an account? <Link to="/register"> <a>Signup</a> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;