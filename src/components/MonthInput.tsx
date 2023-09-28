import React, { useState } from "react";

import { useStore } from "@nanostores/react"; // or '@nanostores/preact'
import { $numOfMonths } from "@utils/store";

export function MonthInput() {
  const numOfMonths = useStore($numOfMonths);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 0) {
      $numOfMonths.set(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mt-4 max-w-xl text-center">
        in{" "}
        <label className="font-bold text-center" htmlFor="num-of-months">
          {numOfMonths.toLocaleString()} months
        </label>
      </p>
      <input
        type="range"
        id="num-of-months"
        name="num-of-months"
        value={numOfMonths}
        onChange={handleInputChange}
        max={12}
      />
    </div>
  );
}
