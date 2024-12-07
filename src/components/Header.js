import React from 'react';
import '../style/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <header className="header">
            <img
                alt="RED.Health Logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/3sB2Toon9ooSGJm6tYb2tlJQk6ublbDQOeipAo4lFwOYBS8JA.jpg"
                width="150"
            />
            <nav className="nav">
                <a href="#" className="nav-link">ABOUT US</a>
                <a href="#" className="nav-link">HELP</a>
                <a href="#" className="nav-link">LOG IN</a>
                <a href="#" className="nav-link">SIGN UP</a>
                <a className="cta-button" href="#">
                    <i className="fas fa-ambulance"></i>
                    BOOK AN AMBULANCE
                </a>
            </nav>
        </header>
    );
};

export default Header;

