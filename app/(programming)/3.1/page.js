"use client";
import { useState } from "react";
import React from "react";
import GoBack from "@/components/GoBack";

const Sorting = () => {
  const [input, setInput] = useState(""); // State untuk input
  const [sortedData, setSortedData] = useState(""); // State untuk data yang sudah diurutkan

  const handleSort = () => {
    // Fungsi pengurutan
    const sort = (nums) => {
      for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < nums[minIndex]) {
            minIndex = j;
          }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
      }
      return nums;
    };

    const inputData = input.split(",").map(Number); // Mengkonversi input ke array angka
    const sorted = sort(inputData); // Mengurutkan data

    setSortedData(sorted.join(", ")); // Menyimpan data yang sudah diurutkan di state
  };

  return (
    <article className="flex min-h-screen flex-col items-center justify-center bg-[#121212]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-bold text-3xl mb-8">
          Sorting
        </h1>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="ex : 1, 12, 2, 13, 23, 31, 62, 71, 81"
            className="py-2 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:border-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
            onClick={handleSort}
          >
            Sort
          </button>
        </div>
        <p className="text-center text-white mt-4">
          Data yang sudah diurutkan: <br /> {sortedData}
        </p>
        <GoBack />
      </div>
    </article>
  );
};

export default Sorting;
