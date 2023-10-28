"use client";
import React from "react";
import { useState } from "react";
import GoBack from "@/components/GoBack";

const Distance = () => {
  const [lat1, setLat1] = useState(0);
  const [lon1, setLon1] = useState(0);
  const [alt1, setAlt1] = useState(0);
  const [lat2, setLat2] = useState(0);
  const [lon2, setLon2] = useState(0);
  const [alt2, setAlt2] = useState(0);
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;

    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distanceInKilometers = R * c;
    const distanceInMeters = distanceInKilometers * 1000;

    setDistance(distanceInMeters);
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#121212] text-white">
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-3xl font-bold mb-4 mx-auto">Distance Calculator</h2>
        <div className="mb-4">
          <label className="text-lg">Latitude 1 &nbsp; &nbsp; :</label>
          <input
            type="number"
            value={lat1}
            placeholder="ex: -6.175392"
            onChange={(e) => setLat1(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Longitude 1 &nbsp;:</label>
          <input
            type="number"
            value={lon1}
            placeholder="ex: 106.827153"
            onChange={(e) => setLon1(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Altitude 1 &nbsp; &nbsp; :</label>
          <input
            type="number"
            value={alt1}
            placeholder="ex: 0"
            onChange={(e) => setAlt1(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Latitude 2 &nbsp; &nbsp;:</label>
          <input
            type="number"
            value={lat2}
            placeholder="ex: -6.175392"
            onChange={(e) => setLat2(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Longitude 2&nbsp;:</label>
          <input
            type="number"
            value={lon2}
            placeholder="ex: 106.827153"
            onChange={(e) => setLon2(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Altitude 2 &nbsp; &nbsp; :</label>
          <input
            type="number"
            value={alt2}
            placeholder="ex: 10"
            onChange={(e) => setAlt2(e.target.value)}
            className="w-fit p-2 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
          />
        </div>
        <button
          onClick={calculateDistance}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mx-auto"
        >
          Calculate Distance
        </button>
        {distance !== null && (
          <p className="text-lg mt-4 mx-auto">
            Distance: {distance.toFixed(2)} meters
          </p>
        )}
      </div>
      <GoBack />
    </section>
  );
};

export default Distance;
