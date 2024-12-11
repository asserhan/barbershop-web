"use client";
import React, { useState } from "react";

const Form = ({ onSubmit }: { onSubmit: (bookingData: any) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = { name, email, phone, date, time, service };
    onSubmit(bookingData);
  };

  return (
    <div className="bg-transparent min-h-screen flex justify-center items-center px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-6 w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg text-black">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <label htmlFor="service" className="block text-gray-700 mb-2">
              Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Haircut">Haircut</option>
              <option value="Shave">Beard Shave</option>
              <option value="Haircut & Shave">Haircut & Beard Shave</option>
            </select>
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
