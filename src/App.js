// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Header from './components/Header';
import RequestAmbulance from './components/RequestAmbulance';
import Login from './components/Login'; // Import Login component
import RegisterPage from './components/RegisterPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes> {/* Define routes here */}
                <Route path="/" element={<RequestAmbulance />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} /> 
            </Routes>
            
        </div>
    );
}

export default App;