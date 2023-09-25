import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { $offeringPrice } from "@utils/store";

export function OfferingPrice() {
  const offeringPrice = useStore($offeringPrice)

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 1) {
      $offeringPrice.set(inputValue);
    }
  };

  return (
    <input
      type="number"
      placeholder="3"
      value={offeringPrice}
      onChange={handleInputChange}
      className="w-12 px-2 py-1 inline-block text-center border border-gray-300 rounded"
    />
  );
}
