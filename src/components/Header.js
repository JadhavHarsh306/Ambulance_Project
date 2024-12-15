import React, { useState } from 'react';
import '../style/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Login';
import Register from './Register';

const Header = () => {
    const [isPopupOpen,setIsPopupOpen]=useState(false);
    const [reg,setreg]=useState(false);
    const OpenPopup=(event)=>{
        event.preventDefault();
        setIsPopupOpen(true);
    };
    const closePopup=()=>{
        setIsPopupOpen(false);
    }

    const RegisterOpen=(event)=>{
        event.preventDefault();
        setreg(true);
    }
    const not=()=>{
        setreg(false);
    }
    return (
        <header className="header1">
            <img
                alt="RED.Health Logo"
                height="50"
                src=".\images\icon.jpeg"
                width="70"
            />
            <nav className="nav">
                <h2>Ambulance Cab Service</h2>
                <a href="#" className="nav-link">ABOUT US</a>
                <a href="#" className="nav-link">HELP</a>
                <a href="login" className="nav-link" onClick={OpenPopup}>LOG IN</a>
                <Login isOpen={isPopupOpen} closePopup={closePopup}/>
                <a href="#" className="nav-link" onClick={RegisterOpen}>SIGN UP</a>
                <Register isActive={reg} notActive={not}/>
                <a className="cta-button" href="#">
                    <i className="fas fa-ambulance"></i>
                    BOOK AN AMBULANCE
                </a>
            </nav>
        </header>
    );
};

export default Header;

