"use client";
import { useState } from "react";
import Form from "./components/Form";

const HomePage = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleBooking = async (bookingData: any) => {
    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message); // Show success message
      } else {
        alert("Error booking appointment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server");
    }
  };

  return (
    <div className="container mx-auto">
      <Form onSubmit={handleBooking} />
      {successMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default HomePage;

