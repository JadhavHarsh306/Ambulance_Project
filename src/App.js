import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RequestAmbulance from './components/RequestAmbulance';
import AmbulanceService from './components/AmbulanceService';
import AmbulanceDriver from './components/AmbulanceDriver';
import FAQs from './components/FAQs';


function App() {
    return (
        <div className="App">
            <Header/>
            <RequestAmbulance/>
            <AmbulanceService/>
            <AmbulanceDriver/>
            <FAQs/>
            <Footer/>
        </div>
    );
}

export default App;
