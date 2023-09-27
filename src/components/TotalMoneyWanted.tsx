import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { $totalMoneyWanted } from "@utils/store";

export function TotalMoneyWanted() {
  const totalMoney = useStore($totalMoneyWanted);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value.replace(/,/g, ""));

    // Check if the input value is a number greater than or equal to 0
    if (!isNaN(inputValue) && inputValue >= 0) {
      $totalMoneyWanted.set(inputValue);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg mt-4 text-slate-600 max-w-xl text-center">
        I want to make
        <label
          className="block font-bold text-center"
          htmlFor="total-money-wanted">
          ${totalMoney.toLocaleString()}
        </label>
      </p>
      <input
        type="range"
        id="total-money-wanted"
        name="total-money-wanted"
        value={totalMoney}
        onChange={handleInputChange}
        min={0}
        step={5000}
        max={500000}
      />
    </div>
  );
}
