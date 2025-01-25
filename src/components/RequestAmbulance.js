import React from "react";
import AmbulanceDriver from './AmbulanceDriver';
import AmbulanceService from './AmbulanceService';
import Footer from "./Footer";
import FAQs from './FAQs';
import "../style/RequestAmbulance.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


const RequestAmbulance = () => {
  return (
    <>
    <div className="ambu-container">
      <div className="content">
        <h1>Request an Ambulance Cab</h1>
        <p>Quick and reliable ambulance service for your health emergencies.</p>
        <div className="input-group">
          <input type="text" placeholder="Enter location" />
          <i className="fas fa-location-arrow icon"></i>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Enter destination" />
          <i className="fas fa-map-marker-alt icon"></i>
        </div>
        <div className="buttons">
          <button className="primary">Book Now</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="./images/Map.jpg"
          alt="Google Map"
        />
      </div>
    </div>
     <AmbulanceService/>
     <AmbulanceDriver/>
     <FAQs/>
     <Footer />
     </>
  );
};

export default RequestAmbulance;
