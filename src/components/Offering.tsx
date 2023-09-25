import React, { useState } from "react";

export function Offering() {
  const [selectedOffering, setSelectedOffering] = useState("product");

  const handleOfferingChange = (e) => {
    setSelectedOffering(e.target.value);
  };

  return (
    <select
      value={selectedOffering}
      onChange={handleOfferingChange}
      className="w-32 px-2 py-1 border border-gray-300 rounded"
    >
      <option value="course">Course</option>
      <option value="service">Service</option>
      <option value="ebook">eBook</option>
      <option value="product">Product</option>
    </select>
  );
}
