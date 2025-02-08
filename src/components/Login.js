import React, { useState } from 'react';
import '../style/Login.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Sending data:", { email, password });
    
        try {
            // Attempt User Login
            const userResponse = await axios.post("http://localhost:7119/Users/loginUser", { email, password });
            console.log(userResponse.data.message)
            if (userResponse.status === 200 && userResponse.data.message === "User Login successful") {
                console.log("Logged in as User");
                console.log(userResponse.data.userName," ==== ",userResponse.data.userId);
                localStorage.setItem('userName', userResponse.data.userName);  // Store user name
                localStorage.setItem("userId", userResponse.data.userId); // Store user ID
                console.log("User ID:", userResponse.data.userId);
                navigate("/ride"); // Redirect to another page after successful login
                return;
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("User login failed, trying Admin...");
            } else {
                console.error("Unexpected error during User login:", error);
                alert("Unexpected error. Please try again.");
                return;
            }
        }
    
        try {
            // Attempt Admin Login
            const adminResponse = await axios.post("http://localhost:7119/Admins/login", { email, password });
            if (adminResponse.status === 200 && adminResponse.data.message === "Admin Login successful") {
                console.log("Logged in as Admin");
                localStorage.setItem('userName', adminResponse.data.userName);  // Store admin name
                navigate("/admin");  // Redirect to Admin page
                return;
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("Admin login failed, trying Driver...");
            } else {
                console.error("Unexpected error during Admin login:", error);
                alert("Unexpected error. Please try again.");
                return;
            }
        }
    
        try {
            // Attempt Driver Login
            const driverResponse = await axios.post("http://localhost:7119/Drivers/loginDriver", { email, password });
            if (driverResponse.status === 200 && driverResponse.data.message === "Driver Login successful") {
                console.log("Logged in as Driver");
                localStorage.setItem('userName', driverResponse.data.userName);
                localStorage.setItem('driverId',driverResponse.data.userId);
                navigate("/driver");  // Redirect to Driver page
                return;
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log("Driver login failed.");
                alert("Invalid Credentials");
            } else {
                console.error("Unexpected error during Driver login:", error);
                alert("Unexpected error. Please try again.");
            }
        }
    };
    
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
                    <form onSubmit={handleLogin}>
                        <input placeholder="Email" type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <input placeholder="Password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Log In</button>
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
