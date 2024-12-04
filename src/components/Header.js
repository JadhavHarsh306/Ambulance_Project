import React from 'react';
import '../style/Header.css';

function Header() {
    return (
        <header>
            <h1>Ambulance Cab Service</h1>
            <nav>
                <a href="#login">Login</a>
                <a href="#register">Register</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
