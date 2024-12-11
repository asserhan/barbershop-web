"use client";

import React, { useEffect, useState } from "react";

interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAppointments = async () => {
    try {
      const response = await fetch("https://barbershop-site.onrender.com/appointements/book/");
      const data = await response.json();
      setAppointments(data.appointements);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setErrorMessage("Failed to fetch appointments. Please try again later.");
    }
  };

  const deleteAppointment = async (id: number) => {
    try {
      const response = await fetch("https://barbershop-site.onrender.com/appointements/book/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (response.status === 404) {
        setErrorMessage("Appointment not found.");
        return;
      }

      if (response.ok) {
        setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
      } else {
        setErrorMessage("Failed to delete the appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setErrorMessage("An error occurred while deleting the appointment.");
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="p-6 lg:p-12 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Appointments
        </h1>

        {errorMessage && (
          <div className="p-4 mb-6 bg-red-100 text-red-800 border border-red-300 rounded">
            {errorMessage}
          </div>
        )}

        {appointments.length > 0 ? (
          <ul className="space-y-6">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="p-6 bg-gray-50 shadow-md rounded-lg flex justify-between items-center flex-wrap gap-4"
              >
                <div>
                  <p className="text-lg font-semibold">{appointment.name}</p>
                  <p className="text-sm text-gray-600">
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="text-sm text-gray-600">{appointment.email}</p>
                  <p className="text-sm text-gray-600">{appointment.phone}</p>
                  <p className="text-sm text-gray-600">
                    Service: {appointment.service}
                  </p>
                </div>

                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="p-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">
            {errorMessage || "No appointments found."}
          </p>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
