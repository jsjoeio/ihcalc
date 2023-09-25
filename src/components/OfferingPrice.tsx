import React, { useState } from "react";

export function OfferingPrice() {
  const [offeringPrice, setOfferingPrice] = useState(50);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 1) {
      setOfferingPrice(inputValue);
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
