import React, { useState } from "react";

export function MonthInput() {
  const [numMonths, setNumOfMonths] = useState(3);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 1) {
      setNumOfMonths(inputValue);
    }
  };

  return (
    <input
      type="number"
      placeholder="3"
      value={numMonths}
      onChange={handleInputChange}
      className="w-12 px-2 py-1 inline-block text-center border border-gray-300 rounded"
    />
  );
}
