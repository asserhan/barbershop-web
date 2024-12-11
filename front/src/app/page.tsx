"use client";
import { useState } from "react";
import Form from "./components/Form";

const HomePage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleBooking = async (bookingData: any) => {
    try {
      const response = await fetch("https://barbershop-site.onrender.com/appointements/book/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
  
      // Check if the response is OK and if the content type is JSON
      if (!response.ok) {
        setErrorMessage("Error booking appointment. Please try again.");
        setSuccessMessage("");
        return;
      }
  
      const contentType = response.headers.get("Content-Type");
  
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setSuccessMessage(data.message); // Show success message
        setErrorMessage("");
        setTimeout(() => setSuccessMessage(""), 5000); // Hide after 5 seconds
      } else {
        // Handle unexpected content type
        setErrorMessage("Unexpected response format from server.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error connecting to the server.");
      setSuccessMessage("");
    }
  };
  

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden overflow-y-hidden">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-screen h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/barber.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10">

        <div className="flex flex-col items-center justify-center p-4">
          {successMessage && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-md shadow-md w-full max-w-lg text-center">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-md shadow-md w-full max-w-lg text-center">
              {errorMessage}
            </div>
          )}
          <Form onSubmit={handleBooking} />
        </div>
      </div>

      {/* Overlay for dimming the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>
    </div>
  );
};

export default HomePage;
