"use client";
import React from "react";
import { useState } from "react";
import GoBack from "@/components/GoBack";

const Pascal = () => {
  const [numRows, setNumRows] = useState(5); // Ganti dengan jumlah baris yang diinginkan

  const generatePascalTriangle = (numRows) => {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          // Menggunakan rumus segitiga Pascal: C(n, k) = C(n-1, k-1) + C(n-1, k)
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
      triangle.push(row);
    }

    return triangle;
  };

  const pascalTriangle = generatePascalTriangle(numRows);

  return (
    <section className="flex min-h-screen flex-col text-white items-center justify-center gap-y-8 bg-[#121212]">
      <h2 className="text-3xl font-bold ">Pascal&rsquo;s Triangle</h2>
      <div className="flex flex-row justify-center items-center">
        <label className="md:text-lg text-sm">Number of Rows: </label>
        <input
          type="number"
          value={numRows}
          onChange={(e) => setNumRows(e.target.value)}
          className="md:px-3 md:py-2 px-2 py-1 text-gray-800 border border-gray-300 rounded-md ml-2 focus:outline-none focus:ring focus:border-white"
        />
      </div>
      <table className="mt-4">
        <tbody>
          {pascalTriangle.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, columnIndex) => (
                <td key={columnIndex} className="p-2 border border-gray-300">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <GoBack />
    </section>
  );
};

export default Pascal;
