import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AmbulanceNavbar from "./AmbulanceNavbar";

const Payments = () => {
    const location = useLocation();
    const { bookingId } = location.state || {}; // Extract bookingId
    const id=localStorage.getItem('userId');

    const handlePay = async () => {
        try {
            const paymentData = {
                bookingId: bookingId, 
                amount: 500, 
                paymentStatus: "COMPLETED",     
                userId: Number(id)
            };

            console.log("Sending Payment Data:", paymentData);

            const response = await axios.post("http://localhost:7119/Users/payment", paymentData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Payment Response:", response.data);

            if (response.status === 201) {
                alert("Payment successful!");
            } else {
                alert("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error("Error processing payment:", error);
            alert("Error occurred while processing payment.");
        }
    };

    return (
        <div>
            <AmbulanceNavbar />
            <h2>Payment Page</h2>
            <p>Booking ID: {bookingId || "N/A"}</p>
            <button onClick={handlePay} disabled={!bookingId}>Pay Now</button>
        </div>
    );
};

export default Payments;
