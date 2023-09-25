import React, { useState } from "react";

export function TotalMoneyWanted() {
  const [totalMoney, setTotalMoney] = useState(50000);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value.replace(/,/g, ""));

    // Check if the input value is a number greater than or equal to 0
    if (!isNaN(inputValue) && inputValue >= 0) {
      setTotalMoney(inputValue);
    }
  };

  return (
    <input
      type="number"
      placeholder="50000"
      value={totalMoney}
      onChange={handleInputChange}
      className="w-20 px-2 py-1 inline-block text-center border border-gray-300 rounded"
    />
  );
}
