import React, { useState } from "react";

import { useStore } from '@nanostores/react' // or '@nanostores/preact'
import { $numOfMonths } from "@utils/store";

export function MonthInput() {
  const numOfMonths = useStore($numOfMonths)

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 1) {
      $numOfMonths.set(inputValue)
    }
  };

  return (
    <input
      type="number"
      placeholder="3"
      value={numOfMonths}
      onChange={handleInputChange}
      className="w-10 px-2 py-1 inline-block text-center border border-gray-300 rounded"
    />
  );
}
