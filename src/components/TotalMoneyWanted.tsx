import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { $totalMoneyWanted } from "@utils/store";

export function TotalMoneyWanted() {
  const totalMoney = useStore($totalMoneyWanted);

  const handleInputChange = (e) => {
    console.log("inside input");
    const inputValue = parseInt(e.target.value.replace(/,/g, ""));

    // Check if the input value is a number greater than or equal to 0
    if (!isNaN(inputValue) && inputValue >= 0) {
      $totalMoneyWanted.set(inputValue);
      console.log("set was called", inputValue);
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
